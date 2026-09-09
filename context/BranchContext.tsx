"use client";

import React, { createContext, useContext, useState } from "react";
import { Branch, BRANCHES, DEFAULT_BRANCH } from "@/config/branches";

interface BranchContextType {
  currentBranch: Branch;
  selectedBranch: string;
  branches: Branch[];
  selectBranch: (branchId: string) => void;
  isBranchModalOpen: boolean;
  openBranchModal: () => void;
  closeBranchModal: () => void;
  isQrModalOpen: boolean;
  openQrModal: () => void;
  closeQrModal: () => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

const STORAGE_KEY = "balespa_selected_branch";

function getInitialBranch(): Branch {
  if (typeof window === "undefined") return DEFAULT_BRANCH;
  try {
    const params = new URLSearchParams(window.location.search);
    const branchParam = params.get("branch")?.toLowerCase().trim();

    if (branchParam) {
      const found = BRANCHES.find(
        (b) => b.id.toLowerCase() === branchParam || b.slug.toLowerCase() === branchParam
      );
      if (found) {
        localStorage.setItem(STORAGE_KEY, found.id);
        return found;
      }
      // Invalid branch query param -> fallback ke default
      return DEFAULT_BRANCH;
    }

    const savedBranchId = localStorage.getItem(STORAGE_KEY);
    if (savedBranchId) {
      const found = BRANCHES.find((b) => b.id === savedBranchId);
      if (found) return found;
    }
  } catch {
    // Ignore storage/search params error in ssr/restricted environments
  }
  return DEFAULT_BRANCH;
}

function getInitialBranchModalState(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const params = new URLSearchParams(window.location.search);
    const hasBranchParam = !!params.get("branch");
    const hasSaved = !!localStorage.getItem(STORAGE_KEY);
    return !hasBranchParam && !hasSaved;
  } catch {
    return false;
  }
}

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const [currentBranch, setCurrentBranch] = useState<Branch>(getInitialBranch);
  const [isBranchModalOpen, setIsBranchModalOpen] = useState<boolean>(getInitialBranchModalState);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const selectBranch = (branchId: string) => {
    const found = BRANCHES.find(
      (b) => b.id.toLowerCase() === branchId.toLowerCase().trim()
    );
    if (found) {
      setCurrentBranch(found);
      try {
        localStorage.setItem(STORAGE_KEY, found.id);
      } catch {
        // Ignore localStorage errors
      }
      setIsBranchModalOpen(false);
    }
  };

  const openBranchModal = () => setIsBranchModalOpen(true);
  const closeBranchModal = () => setIsBranchModalOpen(false);

  const openQrModal = () => setIsQrModalOpen(true);
  const closeQrModal = () => setIsQrModalOpen(false);

  return (
    <BranchContext.Provider
      value={{
        currentBranch,
        selectedBranch: currentBranch.id,
        branches: BRANCHES,
        selectBranch,
        isBranchModalOpen,
        openBranchModal,
        closeBranchModal,
        isQrModalOpen,
        openQrModal,
        closeQrModal,
      }}
    >
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch(): BranchContextType {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error("useBranch must be used within a BranchProvider");
  }
  return context;
}
