// src/utils/discordNotifier.ts
import { PlatformLeadInput } from './leadService';

// Paste your Discord Webhook URL directly here for local development
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1522114691256680468/_lkjDO8S-7ahf3NfzNWQ6IFiXsjJbmX-qSE7pn1oUxjUN9_DciO4iPa5CmL42-Wa9ng9";

export const sendDiscordAlert = async (lead: PlatformLeadInput) => {
  if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL.includes("YOUR_DISCORD_WEBHOOK_URL_HERE")) {
    console.warn("[DISCORD-NOTIFIER] Webhook URL not configured. Skipping alert.");
    return;
  }

  // Create a clean, structural, human-readable layout for Discord markdown
  const embedMessage = {
    username: "JpDev Studio Engine",
    avatar_url: "https://supabase.com/common/assets/images/design-system/supabase-logo-icon.png",
    embeds: [
      {
        title: "⚡ NEW STUDIO PIPELINE LEAD INGESTED",
        color: 2776478, // Corresponds to hex color #2A5D9E (JpDev brand blue)
        fields: [
          {
            name: "🏢 Business Identity",
            value: `**${lead.business_name}**`,
            inline: true
          },
          {
            name: "📞 Contact Number",
            value: `\`${lead.contact_phone}\``,
            inline: true
          },
          {
            name: "🛠️ System Core Scope",
            value: lead.selected_system,
            inline: false
          },
          {
            name: "💰 Financial Target Scales",
            value: lead.estimated_budget,
            inline: true
          },
          {
            name: "🏷️ Calculated Quote",
            value: `\`${lead.calculated_quote}\``,
            inline: true
          },
          {
            name: "⏳ Delivery Timeline Parameters",
            value: lead.selected_timeline,
            inline: false
          }
        ],
        footer: {
          text: `Logged via JpDev Core v1.0 • ${new Date().toLocaleTimeString()}`
        }
      }
    ]
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(embedMessage),
    });

    if (!response.ok) {
      console.error(`[DISCORD-NOTIFIER] Failed to relay payload: ${response.statusText}`);
    }
  } catch (error) {
    console.error("[DISCORD-NOTIFIER] Direct connection error:", error);
  }
};