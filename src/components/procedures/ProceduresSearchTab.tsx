
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, SortAsc, Eye, Clock, Star } from 'lucide-react';

interface ProceduresSearchTabProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function ProceduresSearchTab({ searchTerm, setSearchTerm }: ProceduresSearchTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const procedures = [
    {
      id: 1,
      title: "Création d'entreprise SARL",
      description: "Procédure complète pour créer une société à responsabilité limitée",
      category: "Entreprise",
      duration: "15-30 jours",
      complexity: "Moyenne",
      popularity: 95
    },
    {
      id: 2,
      title: "Permis de construire",
      description: "Demande d'autorisation de construction pour bâtiment résidentiel",
      category: "Urbanisme",
      duration: "2-3 mois",
      complexity: "Élevée",
      popularity: 87
    },
    {
      id: 3,
      title: "Carte nationale d'identité",
      description: "Renouvellement ou première demande de CNI",
      category: "État Civil",
      duration: "7-14 jours",
      complexity: "Faible",
      popularity: 92
    }
  ];

  const filteredProcedures = procedures.filter(procedure => {
    const matchesSearch = procedure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         procedure.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         procedure.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || procedure.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Rechercher des procédures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtrer
          </Button>
          
          <Button variant="outline" size="sm">
            <SortAsc className="w-4 h-4 mr-2" />
            Trier
          </Button>
        </div>
      </div>

      <div className="text-lg font-semibold">
        {filteredProcedures.length} procédure(s) trouvée(s)
      </div>

      <div className="space-y-4">
        {filteredProcedures.map((procedure) => (
          <Card key={procedure.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{procedure.title}</h3>
                    <Badge variant="secondary">{procedure.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{procedure.popularity}%</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{procedure.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Durée: {procedure.duration}</span>
                    </div>
                    <div>
                      Complexité: <Badge variant={
                        procedure.complexity === 'Faible' ? 'default' :
                        procedure.complexity === 'Moyenne' ? 'secondary' : 'destructive'
                      }>{procedure.complexity}</Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="ml-4">
                  <Eye className="w-4 h-4 mr-2" />
                  Voir détails
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
