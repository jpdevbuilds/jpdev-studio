// src/utils/leadService.ts
import { supabase } from './supabaseClient';

export interface PlatformLeadInput {
  business_name: string;
  contact_phone: string;
  selected_system: string;
  estimated_budget: string;
  selected_timeline: string;
  calculated_quote: string;
}

export const leadService = {
  /**
   * Pushes a qualified lead from the client calculator directly into Supabase.
   */
  async createLead(input: PlatformLeadInput) {
    const { data, error } = await supabase
      .from('platform_leads')
      .insert([
        {
          ...input,
          status: 'pending'
        }
      ])
      .select();

    if (error) {
      throw new Error(`Pipeline Write Failure: ${error.message}`);
    }

    return data?.[0] || null;
  },

  /**
   * Fetches leads for your admin dashboard view
   */
  async getAllLeads() {
    const { data, error } = await supabase
      .from('platform_leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};