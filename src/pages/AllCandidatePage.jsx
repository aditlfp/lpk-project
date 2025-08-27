import { ArrowLeft, Star, StarHalf, MapPin, Target, BookOpen, Award, Sparkles, Heart, Home } from "lucide-react";
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../utils/axios'; // Menggunakan utilitas api yang sesungguhnya

// --- Komponen Card yang Didesain Ulang ---

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const InfoRow = ({ icon, label, value }) => (
    <div className="flex items-start text-sm text-gray-600">
        <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-gray-400">{icon}</div>
        <div className="ml-3">
            <span className="font-semibold text-gray-800">{label}:</span>
            <span className="ml-1">{value || 'Tidak ada data'}</span>
        </div>
    </div>
);

const StudentCard = ({ student }) => (
    <motion.div 
        variants={cardVariants}
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-gray-100"
    >
        <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
        <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
                <img className="h-20 w-20 rounded-full object-cover ring-4 ring-purple-100" src={student.imageUrl} alt={`${student.name}'s profile`} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/EAD9F2/333?text=S'; }} />
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{student.name}</h3>
                    <p className="text-purple-600 font-semibold">{student.status}</p>
                </div>
            </div>
            <div className="space-y-3 border-t border-gray-200 pt-4">
                <InfoRow icon={<Award size={18} />} label="Lulus" value={student.graduationYear} />
                <InfoRow icon={<Home size={18} />} label="Alamat" value={student.address} />
            </div>
        </div>
    </motion.div>
);

// fungsi buat render bintang
const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} size={16} className="text-yellow-400 fill-current" />);
    }

    if (hasHalf) {
        stars.push(<StarHalf key="half" size={16} className="text-yellow-400 fill-current" />);
    }

    return stars;
};

const OfficerCard = ({ officer }) => (
    <motion.div 
        variants={cardVariants}
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-gray-100"
    >
        <div className="h-2 bg-gradient-to-r from-green-500 to-teal-600"></div>
        <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
                <img className="h-20 w-20 rounded-full object-cover ring-4 ring-green-100" src={officer.imageUrl} alt={`${officer.name}'s profile`} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/D4E7C5/333?text=O'; }} />
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{officer.name}</h3>
                    <p className="text-green-600 font-semibold flex items-center">
                        {renderStars(officer.rating)}
                        <span className="ml-2">{officer.rating}</span>
                    </p>
                </div>
            </div>
            <div className="space-y-3 border-t border-gray-200 pt-4">
                <InfoRow icon={<MapPin size={18} />} label="Area Tugas" value={officer.assignmentArea} />
                <InfoRow icon={<Target size={18} />} label="Misi" value={officer.mission} />
                <InfoRow icon={<BookOpen size={18} />} label="Visi" value={officer.vision} />
            </div>
        </div>
    </motion.div>
);

const SenseiCard = ({ sensei }) => (
    <motion.div 
        variants={cardVariants}
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-gray-100"
    >
        <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600"></div>
        <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
                <img className="h-20 w-20 rounded-full object-cover ring-4 ring-amber-100" src={sensei.imageUrl} alt={`${sensei.name}'s profile`} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/FFD8B1/333?text=S'; }} />
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{sensei.name}</h3>
                    <p className="text-amber-600 font-semibold">{sensei.experience || 'Pengalaman tidak tersedia'}</p>
                </div>
            </div>
            <div className="space-y-3 border-t border-gray-200 pt-4">
                <InfoRow icon={<Sparkles size={18} />} label="Keunggulan" value={sensei.strength} />
                <InfoRow icon={<Heart size={18} />} label="Hobi" value={sensei.hobby} />
                <InfoRow icon={<Home size={18} />} label="Alamat" value={sensei.address} />
            </div>
        </div>
    </motion.div>
);


// --- Komponen Halaman Utama ---
function AllCandidatePage({ onBackClick }) {
    const [activeTab, setActiveTab] = useState('students');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    const [students, setStudents] = useState([]);
    const [officers, setOfficers] = useState([]);
    const [sensei, setSensei] = useState([]);

    const [pagination, setPagination] = useState({
        currentPage: 1, lastPage: 1, nextUrl: null, prevUrl: null,
    });

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await api.get(url);
            const apiResponse = response.data;
            const candidatesData = apiResponse.data;
            
            const storageBaseUrl = import.meta.env.VITE_STORAGE_IMG; 

            const processedStudents = candidatesData.map(item => ({
                id: item.best_student.id,
                name: item.best_student.nama_lengkap,
                status: item.best_student.status_progress,
                graduationYear: item.best_student.tahun_lulus,
                address: item.best_student.alamat,
                imageUrl: item.best_student?.document?.file_path
                    ? `${storageBaseUrl}/${item.best_student.document.file_path}`
                    : `https://placehold.co/100x100/EAD9F2/333?text=${item.best_student.nama_lengkap.charAt(0)}`,
            }));
            
            const processedOfficers = candidatesData.map(item => ({
                id: item.field_officiers.id,
                name: item.field_officiers.nama_lengkap,
                assignmentArea: item.field_officiers.area_penugasan,
                rating: item.field_officiers.performance_rating,
                mission: item.field_officiers.misi,
                vision: item.field_officiers.visi,
                imageUrl: item.field_officiers?.document?.file_path
                    ? `${storageBaseUrl}/${item.field_officiers.document.file_path}`
                    : `https://placehold.co/100x100/D4E7C5/333?text=${item.field_officiers.nama_lengkap.charAt(0)}`,
            }));

            const processedSensei = candidatesData.map(item => ({
                id: item.sensei.id,
                name: item.sensei.nama_lengkap,
                experience: item.sensei.pengalaman,
                strength: item.sensei.keunggulan_diri,
                hobby: item.sensei.hobi,
                address: item.sensei.alamat,
                imageUrl: item.sensei?.document?.file_path
                    ? `${storageBaseUrl}/${item.sensei.document.file_path}`
                    : `https://placehold.co/100x100/FFD8B1/333?text=${item.sensei.nama_lengkap.charAt(0)}`,
            }));

            setStudents(processedStudents);
            setOfficers(processedOfficers);
            setSensei(processedSensei);

            setPagination({
                currentPage: apiResponse.meta.current_page,
                lastPage: apiResponse.meta.last_page,
                nextUrl: apiResponse.links.next,
                prevUrl: apiResponse.links.prev,
            });

        } catch (error) {
            console.error("Gagal mengambil data kandidat:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData('/active-kandidats');
    }, []);

    const filteredData = useMemo(() => {
        const dataMap = { students, officers, sensei };
        const currentData = dataMap[activeTab] || [];
        if (!searchTerm) return currentData;
        return currentData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, activeTab, students, officers, sensei]);

    const renderContent = () => {
        if (isLoading) {
            return <p className="text-center text-gray-500 col-span-full">Memuat...</p>;
        }
        if (filteredData.length === 0) {
            return <p className="text-center text-gray-500 col-span-full">Tidak ada hasil ditemukan.</p>;
        }

        return filteredData.map(item => {
            if (activeTab === "students") {
                return <StudentCard key={item.id} student={item} />;
            }
            if (activeTab === "officers") {
                return <OfficerCard key={item.id} officer={item} />;
            }
            if (activeTab === "sensei") {
                return <SenseiCard key={item.id} sensei={item} />;
            }
            return null;
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen font-sans py-12 md:py-0 md:mt-24">
            <div className="container mx-auto px-4 py-8">
                <header className="relative text-center mb-10">
                    <button onClick={onBackClick} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Kembali">
                        <ArrowLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Kandidat Terbaik Saat Ini</h1>
                    <p className="text-lg text-gray-600 mt-2">Jelajahi siswa, petugas lapangan, dan sensei.</p>
                </header>

                <div className="mb-8 p-1.5 bg-gray-200 rounded-xl flex justify-center max-w-md mx-auto">
                    <button onClick={() => setActiveTab('students')} className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'students' ? 'bg-white text-indigo-600 shadow' : 'text-gray-600 hover:bg-gray-300'}`}>Siswa Terbaik</button>
                    <button onClick={() => setActiveTab('officers')} className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'officers' ? 'bg-white text-green-600 shadow' : 'text-gray-600 hover:bg-gray-300'}`}>Petugas Lapangan</button>
                    <button onClick={() => setActiveTab('sensei')} className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'sensei' ? 'bg-white text-amber-600 shadow' : 'text-gray-600 hover:bg-gray-300'}`}>Sensei</button>
                </div>
                
                <div className="mb-8 max-w-lg mx-auto">
                    <input type="text" placeholder="Cari berdasarkan nama..." className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>

                <motion.div 
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 min-h-[400px]"
                >
                    <AnimatePresence>
                        {renderContent()}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-12 flex justify-between items-center gap-x-4 md:gap-x-0">
                    <button onClick={() => fetchData(pagination.prevUrl)} disabled={!pagination.prevUrl || isLoading} className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300">
                        Sebelumnya
                    </button>
                    <span className="text-gray-700 font-medium">Halaman {pagination.currentPage} dari {pagination.lastPage}</span>
                    <button onClick={() => fetchData(pagination.nextUrl)} disabled={!pagination.nextUrl || isLoading} className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300">
                        Berikutnya
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AllCandidatePage;
