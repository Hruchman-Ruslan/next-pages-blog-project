import { IMessage } from "@/types/message";

export async function sendContactData(ContactDetails: IMessage) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(ContactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
