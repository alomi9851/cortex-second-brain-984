import { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import { SectionHeader } from './common/SectionHeader';
import { ProceduresTabs } from './ProceduresTabs';
import { ProcedureForm } from './ProcedureForm';
import { ProcedureSummaryModal } from './ProcedureSummaryModal';
import { ApprovalModal } from './ApprovalModal';
import { ApprovalQueueModal } from './ApprovalQueueModal';
import { ApiImportModal } from './modals/ApiImportModal';
import { useApiModalHandler } from '@/hooks/useApiModalHandler';

interface ProceduresSectionsProps {
  section: string;
  language: string;
}

export function ProceduresSections({ section, language }: ProceduresSectionsProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showApprovalQueue, setShowApprovalQueue] = useState(false);
  const [procedureData, setProcedureData] = useState(null);
  const { showApiModal, modalContext, closeApiModal } = useApiModalHandler();

  const handleAddProcedure = () => {
    console.log('Fonction handleAddProcedure appelée');
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  const handleProcedureSubmitted = (data: any) => {
    setProcedureData(data);
    setShowAddForm(false);
    setShowApprovalModal(true);
  };

  const handleCloseSummaryModal = () => {
    setShowSummaryModal(false);
    setProcedureData(null);
  };

  const handleAddAnotherProcedure = () => {
    setShowSummaryModal(false);
    setProcedureData(null);
    setShowAddForm(true);
  };

  const handleApprove = (comment?: string) => {
    console.log('Procédure approuvée:', procedureData, 'Commentaire:', comment);
    setShowApprovalModal(false);
    setShowSummaryModal(true);
  };

  const handleReject = (reason: string) => {
    console.log('Procédure rejetée:', procedureData, 'Raison:', reason);
    setShowApprovalModal(false);
    setProcedureData(null);
  };

  const handleOpenApprovalQueue = () => {
    console.log('Fonction handleOpenApprovalQueue appelée dans ProceduresSections');
    setShowApprovalQueue(true);
  };

  const handleApproveFromQueue = (item: any, comment?: string) => {
    console.log('Approuvé depuis la file:', item, comment);
    // Ici vous pouvez ajouter la logique pour approuver l'élément
  };

  const handleRejectFromQueue = (item: any, reason: string) => {
    console.log('Rejeté depuis la file:', item, reason);
    // Ici vous pouvez ajouter la logique pour rejeter l'élément
  };

  const handleViewFromQueue = (item: any) => {
    console.log('Examen depuis la file:', item);
    setProcedureData(item.data);
    setShowApprovalQueue(false);
    setShowApprovalModal(true);
  };

  const getSectionTitle = () => {
    const titles = {
      fr: {
        'procedures-catalog': 'Catalogue des Procédures Administratives',
        'procedures-enrichment': 'Alimentation de la Banque de Données',
        'procedures-search': 'Recherche de Procédures',
        'procedures-resources': 'Ressources Procédurales'
      },
      ar: {
        'procedures-catalog': 'كتالوج الإجراءات الإدارية',
        'procedures-enrichment': 'إثراء قاعدة البيانات',
        'procedures-search': 'البحث في الإجراءات',
        'procedures-resources': 'موارد الإجراءات'
      },
      en: {
        'procedures-catalog': 'Administrative Procedures Catalog',
        'procedures-enrichment': 'Database Enrichment',
        'procedures-search': 'Procedures Search',
        'procedures-resources': 'Procedural Resources'
      }
    };
    return titles[language as keyof typeof titles]?.[section as keyof typeof titles['fr']] || 'Procédures Administratives';
  };

  const getSectionDescription = () => {
    const descriptions = {
      fr: {
        'procedures-catalog': 'Explorez le catalogue complet des procédures administratives algériennes.',
        'procedures-enrichment': 'Contribuez à l\'enrichissement de la base de données procédurales.',
        'procedures-search': 'Recherchez parmi toutes les procédures administratives disponibles.',
        'procedures-resources': 'Accédez aux ressources et outils liés aux procédures administratives.'
      },
      ar: {
        'procedures-catalog': 'استكشف الكتالوج الكامل للإجراءات الإدارية الجزائرية.',
        'procedures-enrichment': 'ساهم في إثراء قاعدة بيانات الإجراءات.',
        'procedures-search': 'ابحث في جميع الإجراءات الإدارية المتاحة.',
        'procedures-resources': 'اطلع على الموارد والأدوات المتعلقة بالإجراءات الإدارية.'
      },
      en: {
        'procedures-catalog': 'Explore the complete catalog of Algerian administrative procedures.',
        'procedures-enrichment': 'Contribute to enriching the procedural database.',
        'procedures-search': 'Search through all available administrative procedures.',
        'procedures-resources': 'Access resources and tools related to administrative procedures.'
      }
    };
    return descriptions[language as keyof typeof descriptions]?.[section as keyof typeof descriptions['fr']];
  };

  if (showAddForm) {
    return (
      <ProcedureForm 
        onClose={() => setShowAddForm(false)} 
        onSubmit={(data: any) => {
          setProcedureData(data);
          setShowAddForm(false);
          setShowApprovalModal(true);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        title={getSectionTitle()}
        description={getSectionDescription()}
        icon={ClipboardList}
        iconColor="text-blue-600"
      />
      
      <ProceduresTabs 
        section={section} 
        onAddProcedure={() => setShowAddForm(true)}
        onOpenApprovalQueue={() => setShowApprovalQueue(true)}
      />
      
      <ProcedureSummaryModal
        isOpen={showSummaryModal}
        onClose={() => {
          setShowSummaryModal(false);
          setProcedureData(null);
        }}
        onAddAnother={() => {
          setShowSummaryModal(false);
          setProcedureData(null);
          setShowAddForm(true);
        }}
        procedureData={procedureData}
      />

      <ApprovalModal
        isOpen={showApprovalModal}
        onClose={() => setShowApprovalModal(false)}
        onApprove={(comment?: string) => {
          console.log('Procédure approuvée:', procedureData, 'Commentaire:', comment);
          setShowApprovalModal(false);
          setShowSummaryModal(true);
        }}
        onReject={(reason: string) => {
          console.log('Procédure rejetée:', procedureData, 'Raison:', reason);
          setShowApprovalModal(false);
          setProcedureData(null);
        }}
        data={procedureData}
        type="procedure"
      />

      <ApprovalQueueModal
        isOpen={showApprovalQueue}
        onClose={() => setShowApprovalQueue(false)}
        onApproveItem={(item: any, comment?: string) => {
          console.log('Approuvé depuis la file:', item, comment);
        }}
        onRejectItem={(item: any, reason: string) => {
          console.log('Rejeté depuis la file:', item, reason);
        }}
        onViewItem={(item: any) => {
          console.log('Examen depuis la file:', item);
          setProcedureData(item.data);
          setShowApprovalQueue(false);
          setShowApprovalModal(true);
        }}
        filterType="procedure"
      />

      {showApiModal && modalContext && (
        <ApiImportModal
          isOpen={showApiModal}
          onClose={closeApiModal}
          context={modalContext.data?.context || 'procedures'}
        />
      )}
    </div>
  );

  function getSectionTitle() {
    const titles = {
      fr: {
        'procedures-catalog': 'Catalogue des Procédures Administratives',
        'procedures-enrichment': 'Alimentation de la Banque de Données',
        'procedures-search': 'Recherche de Procédures',
        'procedures-resources': 'Ressources Procédurales'
      },
      ar: {
        'procedures-catalog': 'كتالوج الإجراءات الإدارية',
        'procedures-enrichment': 'إثراء قاعدة البيانات',
        'procedures-search': 'البحث في الإجراءات',
        'procedures-resources': 'موارد الإجراءات'
      },
      en: {
        'procedures-catalog': 'Administrative Procedures Catalog',
        'procedures-enrichment': 'Database Enrichment',
        'procedures-search': 'Procedures Search',
        'procedures-resources': 'Procedural Resources'
      }
    };
    return titles[language as keyof typeof titles]?.[section as keyof typeof titles['fr']] || 'Procédures Administratives';
  }

  function getSectionDescription() {
    const descriptions = {
      fr: {
        'procedures-catalog': 'Explorez le catalogue complet des procédures administratives algériennes.',
        'procedures-enrichment': 'Contribuez à l\'enrichissement de la base de données procédurales.',
        'procedures-search': 'Recherchez parmi toutes les procédures administratives disponibles.',
        'procedures-resources': 'Accédez aux ressources et outils liés aux procédures administratives.'
      },
      ar: {
        'procedures-catalog': 'استكشف الكتالوج الكامل للإجراءات الإدارية الجزائرية.',
        'procedures-enrichment': 'ساهم في إثراء قاعدة بيانات الإجراءات.',
        'procedures-search': 'ابحث في جميع الإجراءات الإدارية المتاحة.',
        'procedures-resources': 'اطلع على الموارد والأدوات المتعلقة بالإجراءات الإدارية.'
      },
      en: {
        'procedures-catalog': 'Explore the complete catalog of Algerian administrative procedures.',
        'procedures-enrichment': 'Contribute to enriching the procedural database.',
        'procedures-search': 'Search through all available administrative procedures.',
        'procedures-resources': 'Access resources and tools related to administrative procedures.'
      }
    };
    return descriptions[language as keyof typeof descriptions]?.[section as keyof typeof descriptions['fr']];
  }
}
