
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink, BookOpen, Video, Users } from 'lucide-react';

export function ProceduresResourcesTab() {
  const resources = [
    {
      id: 1,
      title: "Guide des procédures administratives",
      description: "Guide complet pour naviguer dans les procédures administratives algériennes",
      type: "PDF",
      size: "2.5 MB",
      downloads: 1234,
      icon: FileText
    },
    {
      id: 2,
      title: "Modèles de formulaires",
      description: "Collection de modèles de formulaires administratifs",
      type: "ZIP",
      size: "8.2 MB",
      downloads: 856,
      icon: BookOpen
    },
    {
      id: 3,
      title: "Tutoriels vidéo",
      description: "Vidéos explicatives pour les procédures les plus courantes",
      type: "Playlist",
      size: "45 vidéos",
      downloads: 2341,
      icon: Video
    }
  ];

  const links = [
    {
      id: 1,
      title: "Site officiel du gouvernement",
      description: "Portail officiel des services publics",
      url: "https://www.gov.dz"
    },
    {
      id: 2,
      title: "Centre National du Registre du Commerce",
      description: "Services en ligne pour les entreprises",
      url: "https://www.cnrc.org.dz"
    },
    {
      id: 3,
      title: "Ministère de l'Intérieur",
      description: "Procédures d'état civil et de sécurité",
      url: "https://www.interieur.gov.dz"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Documents et guides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <p className="text-sm text-gray-600">{resource.type} • {resource.size}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {resource.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.downloads} téléchargements
                    </span>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Liens utiles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link) => (
            <Card key={link.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h4>
                    <p className="text-gray-600 mb-3">{link.description}</p>
                    <p className="text-sm text-blue-600">{link.url}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visiter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Support communautaire</h3>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Forum d'entraide</h4>
                <p className="text-gray-600 mb-4">
                  Rejoignez notre communauté pour poser des questions et partager votre expérience
                </p>
                <Button>
                  <Users className="w-4 h-4 mr-2" />
                  Rejoindre le forum
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
