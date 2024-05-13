import {formatDistanceToNow} from "date-fns";

export const formattingData = (date: string): string => {
  return formatDistanceToNow(new Date(date), {addSuffix: true});
};
