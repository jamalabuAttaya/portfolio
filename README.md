# Jamal Hassan Abu Attaya — Engineering Security Portfolio

موقع شخصي احترافي يقدّم الهوية الأساسية: **Software & Application Security**، مع خلفية أكاديمية في الحوسبة النقالة وأمن المعلومات.

## التشغيل على Windows

المشروع مضبوط على Webpack لتجنب مشكلة SWC/Turbopack التي ظهرت على جهازك.

```powershell
npm install
npm run dev
```

ثم افتح:

```text
http://localhost:3000
```

فحص النسخة النهائية قبل النشر:

```powershell
npm run verify
```

أوامر الفحص المنفصلة:

```powershell
npm run typecheck
npm run lint
npm test
npm run build
```

## أهم مسارات التعديل

- `app/data/portfolio.ts`: الاسم، النبذة، الساعات، المهارات، التعليم، الشهادات، المشاريع والروابط.
- `app/globals.css`: نظام التصميم، الألوان، التخطيط والتجاوب.
- `app/motion.css`: طبقة الحركة، الزجاج، التوهجات والحركات الدقيقة.
- `app/components/ExperienceLayer.tsx`: شبكة العقد المتحركة، وهج المؤشر وشريط تقدّم الصفحة.
- `app/components/LanguageProvider.tsx`: تبديل العربية والإنجليزية وحفظ لغة الزائر وضبط اتجاه الصفحة.
- `app/i18n/content.ts`: جميع نصوص الواجهة باللغتين في مكان واحد.
- `app/components/InteractionLayer.tsx`: إضاءة المؤشر، نبض النقر، وإمالة البطاقات التفاعلية.
- `app/components/`: جميع أقسام الواجهة.
- `public/My-Photo.webp`: الصورة الشخصية.
- `public/projects/`: صور المشاريع.
- `public/Jamal-Hassan-Abu-Attaya-Formal-CV-2026.pdf`: السيرة الذاتية التي ينزّلها الزر.
- `app/api/contact/route.ts`: واجهة إرسال رسائل نموذج التواصل.

## تفعيل نموذج التواصل

انسخ `.env.example` إلى `.env.local` وأضف بيانات Resend الصحيحة:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=Portfolio <contact@your-verified-domain.example>
CONTACT_TO_EMAIL=jamalabuattaya@gmail.com
```

لا ترفع `.env.local` أو مفتاح API إلى GitHub. عند غياب المفتاح يبقى رابط البريد المباشر متاحاً، ويعرض النموذج رسالة آمنة بدلاً من كشف تفاصيل الخادم.

## قرارات الجودة والأمان

- SVG محلية للأيقونات؛ لا يعتمد الموقع على خط Material Symbols خارجي.
- خلفية Canvas هندسية خفيفة مع حد أقصى ثابت للعقد وكثافة بكسلات مقيدة.
- إيقاف الرسم المتواصل عند إخفاء الصفحة، وتعطيل الحركة تلقائياً عند تفعيل `prefers-reduced-motion`.
- شريط إشارات، رادار أمني، وهج تفاعلي وحركات دخول متعددة دون مكتبة حركة خارجية.
- دعم عربي وإنجليزي كامل مع `RTL/LTR` وحفظ اختيار الزائر محلياً.
- حزم بيانات متحركة داخل شبكة الخلفية، ومدارات أمنية، وإضاءة موضعية تتبع المؤشر.
- تحقق من نوع وحجم ومحتوى طلب نموذج التواصل.
- حماية من الرسائل الآلية عبر honeypot وحد زمني أدنى.
- تعقيم HTML قبل إنشاء رسالة البريد.
- فحص Origin ورسائل أخطاء عامة وعدم تخزين الاستجابات.
- ترويسات أمان أساسية في `next.config.ts`.
- دعم لوحة المفاتيح، حالات focus واضحة، و`prefers-reduced-motion`.
- صور WebP مباشرة لتفادي فشل محولات الصور في بعض بيئات النشر.
- بيانات Metadata وOpen Graph وSchema.org وrobots وsitemap.

## ملاحظة مهنية

يعرض الموقع المهارات المكتسبة من الدراسة والمشاريع بصياغة دقيقة، ويميّز بين الأساس الأكاديمي والخبرة العملية حتى يبقى الملف المهني قوياً وصادقاً أمام أصحاب العمل.
