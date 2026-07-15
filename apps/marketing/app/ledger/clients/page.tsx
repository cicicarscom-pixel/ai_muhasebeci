import { ClientsPage } from "@/components/ledger/clients/ClientsPage";
import { getClientsAction } from "@/modules/clients/application/get-clients.action";

export default async function Page() {
  const { advisorCode, clients } = await getClientsAction();
  
  return <ClientsPage advisorCode={advisorCode} clients={clients} />;
}
