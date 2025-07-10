
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PredictiveJuridicalAnalysis } from './PredictiveJuridicalAnalysis';
import { SpecializedNLP } from './SpecializedNLP';
import { Bot, Brain, Zap, TrendingUp, MessageSquare, Sparkles, History, BarChart3, Users, Target, Shield, AlertTriangle } from 'lucide-react';
import { UnifiedSectionHeader } from '@/components/common/UnifiedSectionHeader';
import { TabFormField } from '@/components/common/TabFormField';

// Import du composant assistant existant
import { AILegalAssistant } from '@/components/AILegalAssistant';

export function EnhancedAILegalAssistant() {
  const [activeFeature, setActiveFeature] = useState<'assistant'>('assistant');
  const [assistantSubTab, setAssistantSubTab] = useState<'main' | 'search' | 'predictive' | 'nlp' | 'recommendations'>('main');

  // Effet pour s'assurer que la page démarre en haut
  useEffect(() => {
    // Forcer le scroll vers le haut lors du montage du composant
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const aiCapabilities = {
    prediction: [
      {
        icon: <Target className="w-5 h-5 text-purple-600" />,
        title: "Prédiction d'issues judiciaires",
        description: "Algorithmes d'IA pour prédire les résultats de litiges basés sur l'historique jurisprudentiel"
      },
      {
        icon: <Shield className="w-5 h-5 text-blue-600" />,
        title: "Évaluation automatique des risques",
        description: "Scoring automatique de conformité réglementaire"
      },
      {
        icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
        title: "Détection d'anomalies",
        description: "IA pour identifier automatiquement les incohérences dans les textes juridiques"
      },
      {
        icon: <Sparkles className="w-5 h-5 text-green-600" />,
        title: "Recommandations contextuelles",
        description: "Suggestions proactives de textes pertinents basées sur le comportement utilisateur"
      }
    ],
    nlp: [
      {
        icon: <Users className="w-5 h-5 text-blue-600" />,
        title: "Extraction d'entités juridiques",
        description: "Reconnaissance automatique de parties, dates, montants, références légales"
      },
      {
        icon: <Bot className="w-5 h-5 text-green-600" />,
        title: "Résumé automatique intelligent",
        description: "Synthèses personnalisées selon le profil utilisateur (avocat, juriste d'entreprise, etc.)"
      },
      {
        icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
        title: "Classification automatique avancée",
        description: "Catégorisation fine des documents par domaine de droit spécialisé"
      },
      {
        icon: <MessageSquare className="w-5 h-5 text-orange-600" />,
        title: "Analyse de sentiment juridique",
        description: "Détection du ton et de l'orientation des décisions judiciaires"
      }
    ]
  };

  const recentSearches = [
    { query: "Procédure de divorce", time: "Il y a 2 heures", results: 15 },
    { query: "Code du commerce article 544", time: "Hier", results: 8 },
    { query: "Loi sur l'investissement 2023", time: "Il y a 2 jours", results: 23 }
  ];

  const insights = [
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
      title: "Tendance détectée",
      description: "Augmentation des recherches sur les marchés publics (+45% cette semaine)"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      title: "Nouveau texte pertinent",
      description: "Décret exécutif n° 24-15 pourrait intéresser vos recherches récentes"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header unifié repositionné */}
      <UnifiedSectionHeader
        icon={Bot}
        title="Assistant IA Juridique Avancé"
        description="Suite complète d'outils d'intelligence artificielle pour l'analyse juridique"
        iconColor="text-green-600"
      />

      {/* Onglet principal unique */}
      <Tabs value={activeFeature} onValueChange={(value) => setActiveFeature(value as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="assistant" className="gap-2">
            <Bot className="w-4 h-4" />
            Assistant IA
          </TabsTrigger>
        </TabsList>

        {/* Contenu avec sous-onglets */}
        <TabsContent value="assistant" className="space-y-6">
          {/* Sous-onglets avec 7 onglets maintenant */}
          <Tabs value={assistantSubTab} onValueChange={(value) => setAssistantSubTab(value as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="main" className="gap-2">
                <Bot className="w-4 h-4" />
                Principal
              </TabsTrigger>
              <TabsTrigger value="search" className="gap-2">
                <Zap className="w-4 h-4" />
                Recherche IA
              </TabsTrigger>
              <TabsTrigger value="predictive" className="gap-2">
                <TrendingUp className="w-4 h-4" />
                Analyse Prédictive
              </TabsTrigger>
              <TabsTrigger value="nlp" className="gap-2">
                <Brain className="w-4 h-4" />
                NLP Spécialisé
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="gap-2">
                <Target className="w-4 h-4" />
                Recommandations
              </TabsTrigger>
            </TabsList>

            {/* Contenu des sous-onglets */}
            <TabsContent value="main" className="space-y-6">
              {/* Champ de recherche avec reconnaissance vocale */}
              <TabFormField
                placeholder="Poser une question à l'assistant IA juridique..."
                onSearch={(query) => console.log('Question IA:', query)}
                onAdd={() => console.log('Nouvelle conversation')}
                onFilter={() => console.log('Filtrer conversations')}
                onSort={() => console.log('Trier conversations')}
                onExport={() => console.log('Exporter conversation')}
                onRefresh={() => console.log('Actualiser IA')}
                showActions={true}
              />

              <AILegalAssistant />
              
              {/* Informations supplémentaires */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <History className="w-5 h-5" />
                      Recherches Récentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentSearches.map((search, index) => (
                      <div key={index} className="space-y-2">
                        <div className="font-medium text-sm cursor-pointer hover:text-green-600">
                          {search.query}
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{search.time}</span>
                          <Badge variant="secondary" className="text-xs">
                            {search.results} résultats
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Insights IA
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {insights.map((insight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          {insight.icon}
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium text-sm">{insight.title}</div>
                          <div className="text-xs text-gray-600">{insight.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="search" className="space-y-6">
              {/* Champ de recherche avec reconnaissance vocale */}
              <TabFormField
                placeholder="Recherche IA avancée..."
                onSearch={(query) => console.log('Recherche IA:', query)}
                onAdd={() => console.log('Nouvelle recherche')}
                onFilter={() => console.log('Filtrer recherches')}
                onSort={() => console.log('Trier recherches')}
                onExport={() => console.log('Exporter recherche')}
                onRefresh={() => console.log('Actualiser recherche')}
                showActions={true}
              />

              {/* Contenu de recherche IA */}
              <div className="text-center py-8">
                <p className="text-gray-600">Fonctionnalités de recherche IA avancée</p>
              </div>
            </TabsContent>

            <TabsContent value="predictive" className="space-y-6">
              {/* Champ de recherche avec reconnaissance vocale */}
              <TabFormField
                placeholder="Analyser un document pour prédiction juridique..."
                onSearch={(query) => console.log('Analyse prédictive:', query)}
                onAdd={() => console.log('Nouvelle analyse')}
                onFilter={() => console.log('Filtrer analyses')}
                onSort={() => console.log('Trier analyses')}
                onExport={() => console.log('Exporter analyse')}
                onRefresh={() => console.log('Actualiser prédictions')}
                showActions={true}
              />

              <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    Analyse Prédictive Juridique
                  </CardTitle>
                  <p className="text-gray-600">
                    Algorithmes avancés d'Intelligence Artificielle pour l'analyse prédictive en droit
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {aiCapabilities.prediction.map((capability, index) => (
                      <Card key={index} className="border-2 border-dashed border-purple-200 hover:border-purple-400 transition-colors">
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-3 mb-2">
                            {capability.icon}
                            <h3 className="font-semibold text-sm">{capability.title}</h3>
                          </div>
                          <p className="text-xs text-gray-600">{capability.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <PredictiveJuridicalAnalysis />
            </TabsContent>

            <TabsContent value="nlp" className="space-y-6">
              {/* Champ de recherche avec reconnaissance vocale */}
              <TabFormField
                placeholder="Analyser un texte avec NLP juridique spécialisé..."
                onSearch={(query) => console.log('Analyse NLP:', query)}
                onAdd={() => console.log('Nouvelle analyse NLP')}
                onFilter={() => console.log('Filtrer analyses NLP')}
                onSort={() => console.log('Trier analyses NLP')}
                onExport={() => console.log('Exporter analyse NLP')}
                onRefresh={() => console.log('Actualiser NLP')}
                showActions={true}
              />

              <Card className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-blue-600" />
                    NLP (Natural Language Processing) Juridique Spécialisé
                  </CardTitle>
                  <p className="text-gray-600">
                    Traitement du langage naturel spécialisé pour l'analyse automatique de textes juridiques
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {aiCapabilities.nlp.map((capability, index) => (
                      <Card key={index} className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors">
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-3 mb-2">
                            {capability.icon}
                            <h3 className="font-semibold text-sm">{capability.title}</h3>
                          </div>
                          <p className="text-xs text-gray-600">{capability.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <SpecializedNLP />
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-6">
              {/* Champ de recherche avec reconnaissance vocale */}
              <TabFormField
                placeholder="Rechercher des recommandations..."
                onSearch={(query) => console.log('Recherche recommandations:', query)}
                onAdd={() => console.log('Ajouter recommandation')}
                onFilter={() => console.log('Filtrer recommandations')}
                onSort={() => console.log('Trier recommandations')}
                onExport={() => console.log('Exporter recommandations')}
                onRefresh={() => console.log('Actualiser recommandations')}
                showActions={true}
              />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-green-600" />
                    Recommandations Contextuelles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Fonctionnalités de recommandations contextuelles avancées</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>

      {/* Footer récapitulatif */}
      <Card className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-2 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <Brain className="w-6 h-6 text-purple-600" />
              Fonctionnalités d'IA Juridique Intégrées
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm border-2 border-purple-100">
                <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3 text-purple-600">Analyse Prédictive</h4>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Prédiction d'issues judiciaires</li>
                  <li>• Évaluation automatique des risques</li>
                  <li>• Détection d'anomalies</li>
                  <li>• Recommandations contextuelles</li>
                </ul>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm border-2 border-blue-100">
                <Zap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3 text-blue-600">NLP Spécialisé</h4>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Extraction d'entités juridiques</li>
                  <li>• Résumés automatiques intelligents</li>
                  <li>• Classification automatique avancée</li>
                  <li>• Analyse de sentiment juridique</li>
                </ul>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm border-2 border-green-100">
                <Bot className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3 text-green-600">Assistant Classique</h4>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Recherche intelligente</li>
                  <li>• Suggestions contextuelles</li>
                  <li>• Actions rapides</li>
                  <li>• Historique et insights</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>🚀 Intelligence Artificielle et Machine Learning Avancé :</strong> 
                Toutes les fonctionnalités d'IA juridique sont maintenant intégrées et accessibles dans cette section.
                Utilisez les sous-onglets ci-dessus pour explorer chaque fonctionnalité en détail.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
