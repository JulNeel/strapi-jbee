/**
 * Lifecycle Hook pour Posts (TypeScript)
 * Gère les dates WordPress lors de la migration
 * 
 * À placer dans: src/api/post/content-types/post/lifecycles.ts
 * Pour Strapi v5 avec TypeScript
 */

interface EventParams {
  data: {
    wpCreatedAt?: string | Date;
    wpUpdatedAt?: string | Date;
    createdAt?: Date;
    updatedAt?: Date;
    [key: string]: any;
  };
  [key: string]: any;
}

interface Event {
  params: EventParams;
  result?: {
    id: number;
    wpId?: number;
    [key: string]: any;
  };
}

export default {
  /**
   * Avant la création d'un post
   * Détecte les dates WordPress et les applique
   */
  async beforeCreate(event: Event): Promise<void> {
    const { data } = event.params;
    
    // Si les dates WordPress sont présentes (migration)
    if (data.wpCreatedAt) {
      // Convertir en objet Date et assigner
      data.createdAt = new Date(data.wpCreatedAt);
      
      // Supprimer le champ temporaire pour ne pas le stocker
      delete data.wpCreatedAt;
      
      console.log(`📅 Date de création WordPress appliquée: ${data.createdAt}`);
    }
    
    if (data.wpUpdatedAt) {
      data.updatedAt = new Date(data.wpUpdatedAt);
      delete data.wpUpdatedAt;
      
      console.log(`📅 Date de modification WordPress appliquée: ${data.updatedAt}`);
    }
  },
  
  /**
   * Après la création d'un post
   * Log pour vérification
   */
  async afterCreate(event: Event): Promise<void> {
    const { result } = event;
    
    if (result?.wpId) {
      console.log(`✅ Post WordPress migré (WP ID: ${result.wpId}) → Strapi ID: ${result.id}`);
    }
  },
  
  /**
   * Avant la mise à jour d'un post
   * Permet de modifier les dates même après création (optionnel)
   */
  async beforeUpdate(event: Event): Promise<void> {
    const { data } = event.params;
    
    // Autoriser la modification des dates via wpCreatedAt/wpUpdatedAt
    // uniquement si explicitement fourni (pour corrections post-migration)
    if (data.wpCreatedAt) {
      data.createdAt = new Date(data.wpCreatedAt);
      delete data.wpCreatedAt;
      console.log(`📅 Date de création mise à jour`);
    }
    
    if (data.wpUpdatedAt) {
      data.updatedAt = new Date(data.wpUpdatedAt);
      delete data.wpUpdatedAt;
      console.log(`📅 Date de modification mise à jour`);
    }
  }
};
