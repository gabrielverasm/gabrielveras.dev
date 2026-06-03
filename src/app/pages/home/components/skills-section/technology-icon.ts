import type { TechnologyIconKind } from '../../../../core/models/portfolio-content.model';

const TECHNOLOGY_ICON_BY_NAME = new Map<string, TechnologyIconKind>([
  ['angular', 'angular'],
  ['angular 2+', 'angular'],
  ['apis rest', 'cicd'],
  ['argo cd', 'argo'],
  ['aws dynamodb', 'aws'],
  ['aws s3', 'aws'],
  ['aws sqs', 'aws'],
  ['bancos relacionais', 'postgresql'],
  ['ci/cd', 'cicd'],
  ['docker', 'docker'],
  ['git', 'git'],
  ['hibernate', 'postgresql'],
  ['java', 'java'],
  ['java 8+', 'java'],
  ['javascript', 'javascript'],
  ['jenkins', 'jenkins'],
  ['jpa', 'postgresql'],
  ['junit', 'junit'],
  ['kafka', 'kafka'],
  ['kubernetes', 'kubernetes'],
  ['microservices', 'quarkus'],
  ['microsserviços', 'quarkus'],
  ['mysql', 'mysql'],
  ['oracle', 'oracle'],
  ['postgresql', 'postgresql'],
  ['quarkus', 'quarkus'],
  ['rancher', 'rancher'],
  ['relational databases', 'postgresql'],
  ['rest apis', 'cicd'],
  ['spring', 'spring'],
  ['spring boot', 'spring'],
  ['tdd', 'junit'],
  ['testes automatizados', 'junit'],
  ['automated tests', 'junit'],
  ['typescript', 'typescript'],
]);

export function technologyIconKind(item: string): TechnologyIconKind | null {
  return TECHNOLOGY_ICON_BY_NAME.get(item.toLowerCase()) ?? null;
}
