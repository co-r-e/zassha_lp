import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/basePath";

interface HighlightItem {
  title: string;
  description: string;
}

interface WorkflowStep {
  title: string;
  description: string;
}

interface WorkflowContent {
  title: string;
  steps: WorkflowStep[];
}

interface PersonaItem {
  title: string;
  description: string;
}

interface PersonasContent {
  title: string;
  description: string;
  items: PersonaItem[];
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqContent {
  title: string;
  items: FaqItem[];
}

interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  videoSrc: string;
}

interface LandingCopy {
  hero: HeroContent;
  highlights: HighlightItem[];
  workflow: WorkflowContent;
  personas: PersonasContent;
  faq: FaqContent;
}

type Locale = "en" | "ja";

const landingContent: Record<Locale, LandingCopy> = {
  en: {
    hero: {
      eyebrow: "AI Manual Assistant",
      title: "Record once. ZASSHA builds the manual for you.",
      description:
        "Upload a screen recording, click Analyze, and ZASSHA extracts clean, reproducible steps with thumbnails, context, and exports for Word, PowerPoint, or Excel in minutes.",
      primaryCta: {
        label: "Download on GitHub",
        href: "https://github.com/co-r-e/Zassha"
      },
      videoSrc: withBasePath("/zassha_demo2_en.mp4")
    },
    highlights: [
      {
        title: "Automatic step extraction",
        description:
          "ZASSHA analyzes your workflow video, detects each operation, and turns it into a table of steps with timestamps, tools, and AI-generated explanations."
      },
      {
        title: "Share-ready exports",
        description:
          "Ship polished documentation instantly with Word, PowerPoint, or Excel exports that include screenshots, captions, and speaker notes."
      },
      {
        title: "Works with long recordings",
        description:
          "Resumable uploads keep analysis smooth. Optionally enable server-side segmentation via ffmpeg for hour-long walkthroughs."
      }
    ],
    workflow: {
      title: "Five-minute publishing workflow",
      steps: [
        {
          title: "Capture",
          description: "Record at 1080p+ using macOS or Windows screen capture tools for best accuracy."
        },
        {
          title: "Upload",
          description: "Drop the file into ZASSHA and pick Summary or Detail mode depending on the level of guidance you need."
        },
        {
          title: "Hint",
          description: "Add a short goal statement so AI can focus on the outcome you expect."
        },
        {
          title: "Review",
          description: "Inspect the overview, business inference, and operation table with hoverable thumbnails."
        },
        {
          title: "Export",
          description: "Send the manual to DOCX, PPTX, or XLSX with consistent naming that matches your source video."
        }
      ]
    },
    personas: {
      title: "Built for ops, enablement, and QA teams",
      description:
        "Anyone tasked with documenting processes can move from raw capture to polished manual without rewriting steps by hand.",
      items: [
        {
          title: "Operations",
          description: "Standardize cross-team procedures and keep audit logs fresh with every process change."
        },
        {
          title: "Customer success",
          description: "Produce up-to-date walkthroughs for onboarding, support runbooks, and help center refreshes."
        },
        {
          title: "Quality assurance",
          description: "Record a test session and ship reproducible bug reports complete with evidence."
        },
        {
          title: "Learning & development",
          description: "Convert training recordings into step-by-step playbooks for new hires and reskilling projects."
        },
        {
          title: "Product management",
          description: "Document feature walk-throughs so engineers, designers, and stakeholders align on expected behavior."
        },
        {
          title: "IT support",
          description: "Capture troubleshooting sessions and publish ready-to-follow guides for service desks."
        },
        {
          title: "New-hire onboarding",
          description: "Welcome new teammates with walkthroughs that mirror real workflows and keep institutional knowledge fresh."
        },
        {
          title: "Technical writers",
          description: "Draft knowledge base articles faster by reusing AI-generated copy and screenshots."
        },
        {
          title: "BPO teams",
          description: "Keep offshore partners aligned with continuously updated, visual instructions."
        }
      ]
    },
    faq: {
      title: "Questions",
      items: [
        {
          question: "Is ZASSHA free to use?",
          answer:
            "Yes. The open-source app is free—you only need a Gemini API key, and any usage charges come directly from Google."
        },
        {
          question: "Which languages can ZASSHA output?",
          answer:
            "English and Japanese manuals are supported out of the box, and you can switch between them using the header language menu."
        },
        {
          question: "How secure is my recording?",
          answer:
            "Processing runs through Google's Gemini Files API. Video segments are only stored temporarily when server-side segmentation is enabled."
        },
        {
          question: "Do I need to edit screenshots manually?",
          answer:
            "No. ZASSHA captures thumbnails automatically for every detected operation, so you only fine-tune the copy."
        }
      ]
    }
  },
  ja: {
    hero: {
      eyebrow: "AIマニュアル生成",
      title: "録画するだけ。ZASSHAが手順書を仕上げます。",
      description:
        "画面操作の動画をアップロードして解析ボタンをクリックするだけで、手順・サムネイル・ビジネス文脈を含んだ手順書を数分で生成します。Word / PowerPoint / Excelにそのまま出力可能。",
      primaryCta: {
        label: "Gitでダウンロード",
        href: "https://github.com/co-r-e/Zassha"
      },
      videoSrc: withBasePath("/zassha_demo2_ja.mp4")
    },
    highlights: [
      {
        title: "操作をAIが分解",
        description: "動画内の操作をAIが検知し、タイムスタンプや使用ツール、説明テキストまで自動で整理します。"
      },
      {
        title: "すぐ共有できる書式",
        description: "Word・PowerPoint・Excelに自動フォーマット。スクリーンショットや注釈もセットで出力されます。"
      },
      {
        title: "長尺動画も安心",
        description: "大容量ファイルはレジューム転送に対応。ffmpegを有効にするとサーバー側で分割解析も行えます。"
      }
    ],
    workflow: {
      title: "公開までの5ステップ",
      steps: [
        {
          title: "録画",
          description: "macOSやWindowsの標準機能で1080p以上の画質で録画すると認識精度が高まります。"
        },
        {
          title: "アップロード",
          description: "ZASSHAにドラッグ＆ドロップし、概要モードか詳細モードを選択します。"
        },
        {
          title: "ヒント入力",
          description: "目標や意図を一言添えると生成される説明の精度が向上します。"
        },
        {
          title: "確認",
          description: "概要・業務推測・操作一覧をレビュー。サムネイルにマウスを乗せるとプレビューできます。"
        },
        {
          title: "エクスポート",
          description: "DOCX / PPTX / XLSX形式で命名規則付きのファイルとして出力します。"
        }
      ]
    },
    personas: {
      title: "オペレーションからQAまで幅広く活躍",
      description: "手順書作成が日常業務のチームが、入力作業なしで最新ドキュメントを維持できます。",
      items: [
        {
          title: "業務設計・BPR",
          description: "部署横断プロセスの標準化や監査対応のドキュメント化に。"
        },
        {
          title: "カスタマーサクセス",
          description: "オンボーディング資料やヘルプセンター記事を素早く更新。"
        },
        {
          title: "品質保証",
          description: "テストセッションを記録して、再現性の高いバグ報告を共有できます。"
        },
        {
          title: "研修・ラーニング",
          description: "研修用動画をそのまま手順書化し、配属直後のメンバー教育をスピードアップ。"
        },
        {
          title: "プロダクトマネジメント",
          description: "機能の期待挙動を明文化し、開発・デザイン・ステークホルダーの共通認識を揃えます。"
        },
        {
          title: "ITサポート",
          description: "トラブルシューティングを録画して、そのまま運用マニュアルとして配布できます。"
        },
        {
          title: "新入社員オンボーディング",
          description: "実際の業務フローを基にした手順書で、立ち上がりを高速化。"
        },
        {
          title: "テクニカルライター",
          description: "AIが生成する説明とスクリーンショットを活用し、ナレッジベース記事を効率的に更新。"
        },
        {
          title: "BPOチーム",
          description: "オフショア先とも同じ手順を共有し、ミスを減らします。"
        }
      ]
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          question: "ZASSHAは無料で使えますか？",
          answer: "はい。オープンソースのため無料で利用できます。費用が発生する場合はGemini APIの利用料のみです。"
        },
        {
          question: "どの言語で出力できますか？",
          answer: "英語と日本語に対応しています。ヘッダーのメニューからいつでも切り替え可能です。"
        },
        {
          question: "録画データの安全性は？",
          answer: "解析はGoogle Gemini Files APIを通じて行われ、サーバー分割機能を使う場合でも動画は一時的に保存されるだけです。"
        },
        {
          question: "スクリーンショットの編集は必要ですか？",
          answer: "いいえ。操作検知と同時にサムネイルも自動生成されるため、テキスト調整のみで完成します。"
        }
      ]
    }
  }
};

export function LandingPage({ locale }: { locale: Locale }) {
  const copy = landingContent[locale];
  const {
    hero,
    highlights,
    workflow,
    personas,
    faq
  } = copy;

  return (
    <>
      <HeroSection {...hero} />
      <HighlightsSection items={highlights} />
      <WorkflowSection {...workflow} />
      <PersonasSection {...personas} />
      <FaqSection {...faq} />
      <CtaSection
        title={locale === "ja" ? "録画から5分で共有まで" : "Ready to turn recordings into living manuals?"}
        description={
          locale === "ja"
            ? "リポジトリをクローンし、Gemini APIキーを設定するだけで、すぐに次の手順書を公開できます。"
            : "Clone the repository, connect your Gemini API key, and publish your next standard operating procedure in minutes."
        }
        primaryLabel={hero.primaryCta.label}
        ctaHref={hero.primaryCta.href}
      />
    </>
  );
}

function HighlightsSection({ items }: { items: HighlightItem[] }) {
  return (
    <section id="features" className="mx-auto w-full max-w-[90rem] px-3 py-16 sm:px-5 sm:py-20 xl:px-6">
      <div className="mx-auto grid gap-6 sm:gap-8 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-zinc-50">{item.title}</h3>
            <p className="mt-4 text-sm text-zinc-400 md:text-base">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkflowSection({ title, steps }: WorkflowContent) {
  return (
    <section id="workflow" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[90rem] px-3 sm:px-5 xl:px-6">
        <h2 className="section-heading text-center lg:text-left">{title}</h2>
        <ol className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group flex flex-col rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-500">{`${index + 1}`.padStart(2, "0")}</span>
              <p className="mt-4 text-lg font-semibold text-zinc-50">{step.title}</p>
              <p className="mt-3 text-sm text-zinc-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PersonasSection({ title, description, items }: PersonasContent) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[90rem] px-3 sm:px-5 xl:px-6">
        <div className="max-w-[64rem] text-center lg:text-left">
          <h2 className="section-heading">{title}</h2>
          <p className="mt-4 subheading">{description}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-zinc-50">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ title, items }: FaqContent) {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[80rem] px-3 sm:px-5 xl:px-6">
        <h2 className="section-heading text-center">{title}</h2>
        <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-6">
          {items.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-white/10 bg-neutral-950/80 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-zinc-50">{item.question}</summary>
              <p className="mt-4 text-sm text-zinc-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({
  title,
  description,
  primaryLabel,
  ctaHref
}: {
  title: string;
  description: string;
  primaryLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div className="mx-auto w-full max-w-[78rem] rounded-[2.5rem] border border-white/15 bg-gradient-to-r from-zinc-100/10 via-zinc-300/5 to-transparent px-5 py-14 text-center sm:px-8 sm:py-16">
        <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">{description}</p>
        <div className="mt-8 flex items-center justify-center">
          <Button href={ctaHref} targetBlank>
            {primaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
