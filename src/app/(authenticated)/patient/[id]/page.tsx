import { ContentPatientDetails } from "./ContentPatientDetails";

interface PatientScreen {
  params: {
    id: string;
  };
}
export default async function PatientScreen(props: PatientScreen) {
  const { params } = props;

  return <ContentPatientDetails id={params.id} />;
}
