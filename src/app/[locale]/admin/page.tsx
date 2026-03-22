'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Download, Filter, Search, Lock, LogOut, ChevronRight, User, Mail, MapPin, Calendar } from 'lucide-react';
import { MotionDiv } from '@/components/animations/MotionElements';

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const ADMIN_PASS = "SwarajyaRatna@2022";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert("Incorrect Password");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!url || !key) return;

      const res = await fetch(`${url}/rest/v1/registrations?select=*&order=created_at.desc`, {
        headers: {
          "apikey": key,
          "Authorization": `Bearer ${key}`
        }
      });
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    if (data.length === 0) return;
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(row => Object.values(row).map(val => `"${val}"`).join(",")).join("\n");
    const csvContent = "data:text/csv;charset=utf-8," + headers + "\n" + rows;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `SwarajyaRatna_Registrations_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
  };

  const filteredData = data.filter(item => {
    const matchesFilter = filter === 'all' || item.interests === filter;
    const matchesSearch = item.fullName?.toLowerCase().includes(search.toLowerCase()) || 
                          item.email?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-orange-50/30 p-4">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-primary/20 w-full max-w-md text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Lock className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl font-black text-primary font-devanagari mb-2">Admin Access</h1>
          <p className="text-foreground/60 mb-8 font-medium italic">Swarajyacha Dhyas, Ratna cha Gaurav</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-2xl border border-primary/10 bg-orange-50/30 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-center text-lg font-bold"
            />
            <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-black bg-primary">Authenticate</Button>
          </form>
        </MotionDiv>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50/10 pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-primary font-devanagari">Registration Dashboard</h1>
            <p className="text-foreground/60 font-bold mt-2 flex items-center gap-2 italic">
               <ChevronRight size={18} className="text-primary" /> Active Registrations Captured
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={downloadCSV} className="rounded-full border-primary/20 text-primary hover:bg-primary/5 h-12 px-6 font-bold flex gap-2">
              <Download size={20} /> Export CSV
            </Button>
            <Button variant="ghost" onClick={() => setIsAuthenticated(false)} className="rounded-full hover:bg-red-50 text-red-500 h-12 w-12 p-0 flex items-center justify-center">
              <LogOut size={20} />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
           <div className="bg-white p-6 rounded-3xl border border-primary/10 shadow-sm">
              <span className="text-foreground/50 text-sm font-black uppercase tracking-wider block mb-1">Total Items</span>
              <span className="text-3xl font-black text-primary">{data.length}</span>
           </div>
           <div className="bg-white p-6 rounded-3xl border border-primary/10 shadow-sm">
              <span className="text-foreground/50 text-sm font-black uppercase tracking-wider block mb-1">Found This Session</span>
              <span className="text-3xl font-black text-primary">{filteredData.length}</span>
           </div>
        </div>

        {/* Controls */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-primary/10 shadow-xl mb-12 flex flex-col md:flex-row gap-6 items-center">
           <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={20} />
              <input 
                type="text" 
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl border border-primary/5 bg-orange-50/20 focus:border-primary/30 outline-none transition-all font-medium"
              />
           </div>
           <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="text-primary" size={20} />
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="flex-grow md:w-48 p-4 rounded-2xl border border-primary/10 bg-white outline-none cursor-pointer font-bold text-primary"
              >
                 <option value="all">All Interests</option>
                 <option value="drama">Drama</option>
                 <option value="dance">Dance</option>
                 <option value="tech">Tech</option>
                 <option value="management">Management</option>
                 <option value="history">History</option>
              </select>
           </div>
        </div>

        {/* Table/List */}
        <div className="grid gap-6">
          {loading ? (
            <div className="py-20 text-center animate-pulse text-primary font-black text-xl italic">Loading Database...</div>
          ) : filteredData.map((item, idx) => (
            <MotionDiv 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={item.id} 
              className="bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-primary/10 shadow-md hover:shadow-xl hover:border-primary/30 transition-all flex flex-col lg:flex-row lg:items-center gap-8 group"
            >
              <div className="flex items-center gap-6 lg:w-1/4">
                 <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-black shadow-[0_5px_15px_rgba(255,153,51,0.3)]">
                    {item.fullName?.charAt(0)}
                 </div>
                 <div>
                    <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">{item.fullName}</h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-widest">{item.interests}</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 flex-grow gap-6 text-sm font-bold">
                 <div className="flex items-center gap-3 text-foreground/70">
                    <Mail size={16} className="text-primary" /> {item.email}
                 </div>
                 <div className="flex items-center gap-3 text-foreground/70">
                    <User size={16} className="text-primary" /> {item.age} yrs | {item.gender}
                 </div>
                 <div className="flex items-center gap-3 text-foreground/70">
                    <MapPin size={16} className="text-primary" /> {item.city}
                 </div>
                 <div className="flex items-center gap-3 text-foreground/70">
                    <Calendar size={16} className="text-primary" /> {new Date(item.created_at).toLocaleDateString()}
                 </div>
              </div>

              <div className="lg:w-1/4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-black/5 lg:pl-8">
                 <p className="text-foreground/60 italic text-sm line-clamp-2">" {item.reason} "</p>
              </div>
            </MotionDiv>
          ))}
          {!loading && filteredData.length === 0 && (
            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-primary/20">
               <span className="text-4xl mb-4 block">🏜️</span>
               <p className="text-foreground/40 font-bold italic">No registrations found matching your filters.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
