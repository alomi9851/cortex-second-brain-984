
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Upload, Settings, Database } from 'lucide-react';

interface ActionButtonsProps {
  resourceType?: 'ouvrage' | 'revue' | 'journal' | 'article' | 'video' | 'directory';
}

export function ActionButtons({ resourceType = 'ouvrage' }: ActionButtonsProps) {
  const handleAddNew = () => {
    console.log('Opening add library resource form:', resourceType);
    
    const event = new CustomEvent('open-library-form', {
      detail: { resourceType }
    });
    window.dispatchEvent(event);
  };

  const handleEnrichment = () => {
    console.log('Opening enrichment with file import from library action buttons...');
    
    const event = new CustomEvent('open-modal', {
      detail: {
        type: 'import',
        title: 'Importer des fichiers',
        data: { acceptedTypes: ['.pdf', '.doc', '.docx', '.txt'] }
      }
    });
    window.dispatchEvent(event);
  };

  const handleApiConfig = () => {
    console.log('Opening API configuration for:', resourceType);
    
    const event = new CustomEvent('open-modal', {
      detail: {
        type: 'api-import',
        title: `Configuration API - ${resourceType}`,
        data: { context: 'legal-texts', resourceType }
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="flex justify-center gap-3 mb-6">
      <Button className="gap-2 bg-teal-600 hover:bg-teal-700" onClick={handleAddNew}>
        <Plus className="w-4 h-4" />
        Ajouter
      </Button>
      <Button variant="outline" className="gap-2 border-teal-200 text-teal-700 hover:bg-teal-50" onClick={handleEnrichment}>
        <Upload className="w-4 h-4" />
        Enrichir
      </Button>
      <Button variant="outline" className="gap-2 border-purple-200 text-purple-700 hover:bg-purple-50" onClick={handleApiConfig}>
        <Database className="w-4 h-4" />
        API
      </Button>
    </div>
  );
}
