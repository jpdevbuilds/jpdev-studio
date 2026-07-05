import { useEffect, useState } from 'react';
import { leadService } from '../utils/leadService';
import { notify } from '../utils/notifier';

interface Lead {
  id: string;
  created_at: string;
  business_name: string;
  contact_phone: string;
  selected_system: string;
  estimated_budget: string;
  selected_timeline: string;
  calculated_quote: string;
  status: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const data = await leadService.getAllLeads();
        setLeads(data || []);
      } catch (error: any) {
        notify(error.message || "Failed to load pipeline leads.", "error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchLeads();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F1EFE7] font-jasper flex items-center justify-center">
        <span className="text-xs font-bold tracking-widest text-[#2A5D9E] uppercase animate-pulse">
          Loading Studio Pipeline...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1EFE7] font-jasper p-6 md:p-12 text-[#111111]">
      {/* Dashboard Top Navigation / Metrics Header */}
      <header className="mb-10 border-b border-[#111111]/10 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#2A5D9E] uppercase block mb-1">
            INTERNAL ADMINISTRATIVE CONSOLE
          </span>
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            JpDev. Studio Pipeline
          </h1>
        </div>
        
        {/* Rapid Overview Metrics Cards */}
        <div className="flex gap-6 text-left">
          <div className="bg-white border border-[#111111]/5 px-4 py-2.5 rounded-xl min-w-[100px]">
            <span className="text-[9px] font-bold text-[#111111]/40 uppercase block">Total Leads</span>
            <span className="text-lg font-bold tracking-tight">{leads.length}</span>
          </div>
          <div className="bg-white border border-[#111111]/5 px-4 py-2.5 rounded-xl min-w-[100px]">
            <span className="text-[9px] font-bold text-[#2A5D9E] uppercase block">Active Dealflow</span>
            <span className="text-lg font-bold tracking-tight text-[#2A5D9E]">
              {leads.filter(l => l.status === 'pending').length}
            </span>
          </div>
        </div>
      </header>

      {/* Main Data Table View Layer */}
      <div className="bg-white border border-[#111111]/10 rounded-2xl shadow-sm overflow-hidden">
        {leads.length === 0 ? (
          <div className="p-12 text-center text-xs font-medium text-[#111111]/40">
            No active project inquiries found in database table.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111111]/5 border-b border-[#111111]/10 text-[10px] font-bold tracking-wider text-[#111111]/50 uppercase">
                  <th className="py-3.5 px-6">Timestamp</th>
                  <th className="py-3.5 px-6">Business Identity</th>
                  <th className="py-3.5 px-6">System Scope</th>
                  <th className="py-3.5 px-6">Financial Target</th>
                  <th className="py-3.5 px-6">Calculated Quote</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#111111]/5 text-xs font-medium">
                {leads.map((lead) => {
                  const dateFormatted = new Date(lead.created_at).toLocaleDateString('en-NG', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  return (
                    <tr key={lead.id} className="hover:bg-[#F1EFE7]/30 transition-colors">
                      <td className="py-4 px-6 text-[#111111]/40 whitespace-nowrap">{dateFormatted}</td>
                      <td className="py-4 px-6 font-bold">
                        <div className="flex flex-col">
                          <span>{lead.business_name}</span>
                          <span className="text-[10px] text-[#111111]/50 font-normal mt-0.5">{lead.contact_phone}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-[#111111]/70">{lead.selected_system}</td>
                      <td className="py-4 px-6 text-[#111111]/50">{lead.estimated_budget}</td>
                      <td className="py-4 px-6 text-[#2A5D9E] font-bold">{lead.calculated_quote}</td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <a
                          href={`https://wa.me/${lead.contact_phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block bg-[#2A5D9E] hover:bg-[#111111] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors"
                        >
                          Initiate Chat
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}