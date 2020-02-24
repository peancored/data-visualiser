import { Transaction } from "../../../types/transaction";
import { DisplayedColumn } from "../../../types/displayedColumn";

export interface Props {
  data: Transaction[];
  className?: string;
  displayedColumns: DisplayedColumn[];
}
