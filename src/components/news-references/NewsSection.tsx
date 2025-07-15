
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Newspaper, Calendar, ExternalLink, Eye, Settings, Database } from 'lucide-react';

export function NewsSection() {
  const handleApiConfig = () => {
    console.log('Opening API configuration for news...');
    
    const event = new CustomEvent('open-modal', {
      detail: {
        type: 'api-import',
        title: 'Configuration API - Actualités',
        data: { context: 'news' }
      }
    });
    window.dispatchEvent(event);
  };

  const recentNews = [
    {
      id: 1,
      title: "Nouvelle réglementation sur les marchés publics",
      date: "15 Jan 2024",
      source: "Journal Officiel",
      category: "Réglementaire",
      summary: "Mise à jour des procédures d'appel d'offres publics",
      urgent: true
    },
    {
      id: 2,
      title: "Modification du Code de procédure civile",
      date: "12 Jan 2024",
      source: "Ministère de la Justice",
      category: "Législatif",
      summary: "Nouvelles dispositions concernant la médiation",
      urgent: false
    },
    {
      id: 3,
      title: "Loi de finances 2024 promulguée",
      date: "28 Déc 2023",
      source: "Présidence",
      category: "Financier",
      summary: "Principales mesures fiscales pour l'année 2024",
      urgent: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Bouton API */}
      <div className="flex justify-center mb-6">
        <Button 
          variant="outline" 
          className="gap-2 border-purple-200 text-purple-700 hover:bg-purple-50"
          onClick={handleApiConfig}
        >
          <Database className="w-4 h-4" />
          API
        </Button>
      </div>

      <div className="grid gap-4">
        {recentNews.map((news) => (
          <Card key={news.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Newspaper className="w-4 h-4 text-blue-600" />
                    <Badge variant="outline">{news.category}</Badge>
                    {news.urgent && (
                      <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg text-gray-900 leading-tight">
                    {news.title}
                  </CardTitle>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {news.date}
                </div>
                <span>•</span>
                <span>{news.source}</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-gray-700 mb-4">
                {news.summary}
              </CardDescription>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-1" />
                  Lire
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Source
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
