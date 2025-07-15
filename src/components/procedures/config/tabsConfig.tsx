
import { useState } from 'react';
import { Search, BookOpen, Plus, CheckSquare, FileText, Settings } from 'lucide-react';
import { ProcedureCatalogTab } from '../ProcedureCatalogTab';
import { ProceduresEnrichmentTab } from '../tabs/ProceduresEnrichmentTab';
import { ProceduresSearchTab } from '../ProceduresSearchTab';
import { ProceduresResourcesTab } from '../ProceduresResourcesTab';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TabsConfigProps {
  section: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onAddProcedure?: () => void;
  onOpenApprovalQueue?: () => void;
  onOCRTextExtracted?: (text: string) => void;
}

export const getTabsConfig = ({
  section,
  searchTerm,
  setSearchTerm,
  onAddProcedure,
  onOpenApprovalQueue,
  onOCRTextExtracted
}: TabsConfigProps) => {
  const defaultValue = section === 'procedures-enrichment' ? 'enrichment' : 'catalog';
  
  const tabs = [
    {
      value: 'catalog',
      label: 'Catalogue',
      icon: BookOpen,
      content: (
        <ProcedureCatalogTab 
          onAddProcedure={onAddProcedure}
          onOpenApprovalQueue={onOpenApprovalQueue}
        />
      )
    },
    {
      value: 'enrichment',
      label: 'Alimentation',
      icon: Plus,
      content: (
        <ProceduresEnrichmentTab 
          onAddProcedure={onAddProcedure || (() => {})}
          onOCRTextExtracted={onOCRTextExtracted}
        />
      )
    },
    {
      value: 'search',
      label: 'Recherche',
      icon: Search,
      content: (
        <ProceduresSearchTab 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )
    },
    {
      value: 'resources',
      label: 'Ressources',
      icon: FileText,
      content: <ProceduresResourcesTab />
    }
  ];

  return { defaultValue, tabs };
};
