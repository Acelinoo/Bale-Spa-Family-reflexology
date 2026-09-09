"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Branch, BRANCHES, DEFAULT_BRANCH } from "@/config/branches";

interface BranchContextType {
  currentBranch: Branch;
  branches: Branch[];
  selectBranch: (branchId: string) => void;
  isBranchModalOpen: boolean;
  openBranchModal: () => void;
  closeBranchModal: () => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

const STORAGE_KEY = "balespa_selected_branch";

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const [currentBranch, setCurrentBranch] = useState<Branch>(DEFAULT_BRANCH);
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedBranchId = localStorage.getItem(STORAGE_KEY);
        if (savedBranchId) {
          const found = BRANCHES.find((b) => b.id === savedBranchId);
          if (found) {
            setCurrentBranch(found);
            return;
          }
        }
        // Jika pengunjung baru pertama kali membuka web, tampilkan modal pilih cabang
        setIsBranchModalOpen(true);
      } catch {
        setIsBranchModalOpen(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const selectBranch = (branchId: string) => {
    const found = BRANCHES.find((b) => b.id === branchId);
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

  return (
    <BranchContext.Provider
      value={{
        currentBranch,
        branches: BRANCHES,
        selectBranch,
        isBranchModalOpen,
        openBranchModal,
        closeBranchModal,
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
