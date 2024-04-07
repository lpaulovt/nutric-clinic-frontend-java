import { DietPlanDetails } from "./DietPlanDetails";

interface DietPlanScreenProps {
  params: {
    id: string;
  };
}

export default async function DietPlanScreen({ params }: DietPlanScreenProps) {
  return <DietPlanDetails id={params.id} />;
}
