import { withBasePath } from "@/lib/basePath";

export const enContent = {
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
};

export const jaContent = {
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
      description:
        "動画内の操作をAIが検知し、タイムスタンプや使用ツール、説明テキストまで自動で整理します。"
    },
    {
      title: "すぐ共有できる書式",
      description:
        "Word・PowerPoint・Excelに自動フォーマット。スクリーンショットや注釈もセットで出力されます。"
    },
    {
      title: "長尺動画も安心",
      description:
        "大容量ファイルはレジューム転送に対応。ffmpegを有効にするとサーバー側で分割解析も行えます。"
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
        description: "機能デモ動画から期待する挙動を整理し、開発・デザイン・ビジネスの認識をそろえます。"
      },
      {
        title: "社内ITサポート",
        description: "トラブルシューティングを録画して、サービスデスク向けのガイドを即配布。"
      },
      {
        title: "新人オンボーディング",
        description: "現場の操作を録画して手順書化。OJTの属人化を減らし、即戦力化を後押しします。"
      },
      {
        title: "テクニカルライティング",
        description: "ナレッジベース記事の原稿とスクリーンショットをAIが下書き。整形だけで公開できます。"
      },
      {
        title: "BPO／アウトソースチーム",
        description: "業務委託先と最新フローを共有し、品質ばらつきを抑えます。"
      }
    ]
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        question: "料金はかかりますか？",
        answer: "オープンソースのため無償で利用できます。必要なのはGemini APIキーのみで、費用はGoogle側での課金に限られます。"
      },
      {
        question: "対応言語は？",
        answer: "UIから英語と日本語を切り替え可能です。他言語は今後拡張予定です。"
      },
      {
        question: "動画データの扱いは安全？",
        answer: "Google Gemini Files APIで解析を行い、サーバー分割を有効にした場合も一時的な保存に留まります。"
      },
      {
        question: "スクリーンショットの調整は必要？",
        answer: "AIが各ステップのサムネイルを自動生成するため、テキストの微調整だけで完了します。"
      }
    ]
  }
};
