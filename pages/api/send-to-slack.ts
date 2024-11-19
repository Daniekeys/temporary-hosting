import { WebClient } from "@slack/web-api";
import { NextApiRequest, NextApiResponse } from "next";

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);
const channelId = process.env.SLACK_CHANNEL_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, orgName, dataNeeded, painPoint } = req.body;

  if (!name || !email || !phone || !orgName || !dataNeeded || !painPoint) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await slackClient.chat.postMessage({
      channel: channelId!,
      text: `📢 *New Form Submission*:
- *Name:* ${name}
- *Email:* ${email}
- *Phone:* ${phone}
- *Organization:* ${orgName}
- *Data Needed:* ${dataNeeded}
- *Pain Point:* ${painPoint}`,
    });

    res
      .status(200)
      .json({ message: "Notification sent to Slack successfully!" });
  } catch (error) {
    console.error("Error sending message to Slack:", error);
    res.status(500).json({ message: "Failed to send message to Slack" });
  }
}
