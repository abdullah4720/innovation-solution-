/* ============================================================
   منصة صنّاع الحلول الابتكارية
   جامعة القصيم × وزارة الصناعة والثروة المعدنية
   ------------------------------------------------------------
   ضع مفاتيح المشروع الجديد من:
   Supabase ← Project Settings ← API
   ============================================================ */

const SUPABASE_URL      = 'https://cyrbuojdarhfjyzrcdgq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_CGWXuZ4ltyGgpzV-IpZ_Nw_pa3iuLRo';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
});

/* الفئات المستهدفة — كما وردت في ملف البرنامج */
const CATEGORIES = [
  'طلبة الجامعات',
  'رواد الأعمال',
  'المهتمين بقطاع البلديات',
  'المهتمين بقطاعات الصناعة',
];
