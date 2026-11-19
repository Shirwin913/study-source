// 第二階段：依使用者提供圖片之 Excel 第2～226列收錄；保留重複題與原表答案。
const stage2Categories = ["FMEA 失效模式分析","APQP 與工程改善","SPC 統計製程管制","良率管理","DOE 實驗設計","Control Plan 與 TCM","OCAP 異常處理","下腳回收與報廢","工程圖面","可靠度實驗","量測與校正","電性與訊號完整性","失效分析 FA","產能與 OEE","封裝應力與強度"];
const stage2Questions = [
  {
    "id": 1,
    "sourceRow": 2,
    "cat": 0,
    "text": "Failure Mode Effect Analysis（簡稱FMEA）1960年由美國太空總署所發展出來的，之後1970年代由汽車產業的FORD提出，並散佈到石油化學、醫藥設備以及電子半導體體系。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 2,
    "sourceRow": 3,
    "cat": 0,
    "text": "Failure Mode Effect Analysis即失敗模式效應分析，其最終的目的是降低RPN值。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 3,
    "sourceRow": 4,
    "cat": 0,
    "text": "FMEA中RPN為Severity嚴重性、Occurrence發生頻率與Detection偵出度三項之總和，並依RPN的大小，作為製程改善措施執行的先後順序。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 4,
    "sourceRow": 5,
    "cat": 0,
    "text": "FMEA中RPN為Severity嚴重性、Occurrence發生頻率與Detection偵出度三項之乘積，並依RPN的大小，作為製程改善措施執行的先後順序。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 5,
    "sourceRow": 6,
    "cat": 0,
    "text": "RPN = Severity × Occurrence × Detection。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 6,
    "sourceRow": 7,
    "cat": 0,
    "text": "RPN分數越高，表示愈需要優先改善。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 7,
    "sourceRow": 8,
    "cat": 0,
    "text": "SOD = Severity + Occurrence ×10 + Detection ×100。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 8,
    "sourceRow": 9,
    "cat": 0,
    "text": "SOD = Severity ×100 + Occurrence ×10 + Detection。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 9,
    "sourceRow": 10,
    "cat": 0,
    "text": "OP可調整FMEA中的RPN值，因為OP查檢頻率加嚴後，RPN會下降。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 10,
    "sourceRow": 11,
    "cat": 0,
    "text": "Severity可藉由Recommended Action改變（例如改變製程設計）缺點所造成的潛在性影響，降低其數值。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 11,
    "sourceRow": 12,
    "cat": 0,
    "text": "PFMEA需半年review一次。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 12,
    "sourceRow": 13,
    "cat": 0,
    "text": "PFMEA需一年review一次。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 13,
    "sourceRow": 14,
    "cat": 0,
    "text": "DFMEA始於方塊圖，PFMEA始於製程流程圖。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 14,
    "sourceRow": 15,
    "cat": 0,
    "text": "DFMEA始於製程流程圖，PFMEA始於方塊圖。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 15,
    "sourceRow": 16,
    "cat": 0,
    "text": "PFMEA與DFMEA使用時機不同，使用方法邏輯相同。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 16,
    "sourceRow": 17,
    "cat": 0,
    "text": "DFMEA主要是談能力構面，PFMEA主要是談動作構面。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 17,
    "sourceRow": 18,
    "cat": 0,
    "text": "DFMEA主要是談動作構面，PFMEA主要是談能力構面。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 18,
    "sourceRow": 19,
    "cat": 0,
    "text": "探討及定義製程作業前的相關的預防錯誤機制是屬於DFMEA範疇。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 19,
    "sourceRow": 20,
    "cat": 0,
    "text": "探討及定義製程作業中／後的相關的作業標準及檢驗標準是屬於PFMEA範疇。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 20,
    "sourceRow": 21,
    "cat": 0,
    "text": "一個失效模式有很多原因時，應針對列出的每項原因評定發生度與檢出度分數。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 21,
    "sourceRow": 22,
    "cat": 0,
    "text": "一個失效模式的不同原因，可能因為發生機率或檢查方式不同而有不同的RPN。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 22,
    "sourceRow": 23,
    "cat": 0,
    "text": "當製造流程改變或生產場所遷移時，必須考慮更新該製程的FMEA評定。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 23,
    "sourceRow": 24,
    "cat": 0,
    "text": "經矯正措施後重新評分，AP還是超過界限值時，FMEA小組仍須建議改善。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 24,
    "sourceRow": 25,
    "cat": 0,
    "text": "Assembly PFMEA通常會放在各製程哪份文件規格當中？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "TCM（Total Control Methodology）"
      },
      {
        "key": "B",
        "text": "Control plan"
      },
      {
        "key": "C",
        "text": "PDM"
      },
      {
        "key": "D",
        "text": "各製程獨立一份SPEC管控"
      }
    ]
  },
  {
    "id": 25,
    "sourceRow": 26,
    "cat": 0,
    "text": "發生度等級是依照何者定義？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "評估Potential Effect(s) of Failure對後工廠／後製程／客戶／最終客戶影響的嚴重性"
      },
      {
        "key": "B",
        "text": "針對發生原因的預防管制的方法"
      },
      {
        "key": "C",
        "text": "在製程中對潛在發生原因或缺點模式的偵測方法"
      }
    ]
  },
  {
    "id": 26,
    "sourceRow": 27,
    "cat": 0,
    "text": "Severity嚴重性等級是依照何者定義？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "評估Potential Effect(s) of Failure對後工廠／後製程／客戶／最終客戶影響的嚴重性"
      },
      {
        "key": "B",
        "text": "針對發生原因的預防管制的方法"
      },
      {
        "key": "C",
        "text": "在製程中對潛在發生原因或缺點模式的偵測方法"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 27,
    "sourceRow": 28,
    "cat": 0,
    "text": "偵出度等級是依照何者定義？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "評估Potential Effect(s) of Failure對後工廠／後製程／客戶／最終客戶影響的嚴重性"
      },
      {
        "key": "B",
        "text": "針對發生原因的預防管制的方法"
      },
      {
        "key": "C",
        "text": "在製程中對潛在發生原因或缺點模式的偵測方法"
      }
    ]
  },
  {
    "id": 28,
    "sourceRow": 29,
    "cat": 0,
    "text": "Detection偵出度等級是依照何者定義？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "評估Potential Effect(s) of Failure對後工廠／後製程／客戶／最終客戶影響的嚴重性"
      },
      {
        "key": "B",
        "text": "針對發生原因的預防管制的方法"
      },
      {
        "key": "C",
        "text": "在製程中對潛在發生原因或缺點模式的偵測方法"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 29,
    "sourceRow": 30,
    "cat": 0,
    "text": "How many ranking level of detection is？Detection偵出度共分幾等級？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "12"
      }
    ]
  },
  {
    "id": 30,
    "sourceRow": 31,
    "cat": 0,
    "text": "下列有關PFMEA何者為正確的？（複選，依原圖選項作答）",
    "answer": "E",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "PFMEA是一個相互作用的過程，永無止境"
      },
      {
        "key": "B",
        "text": "嚴重性、發生率、偵出度，均可由改善行動來降低其級數"
      },
      {
        "key": "C",
        "text": "RPN分數越高，表示情況越嚴重"
      },
      {
        "key": "D",
        "text": "RPN危險優先等級是由嚴重性、發生率、偵出度三項乘積之數值，最大值為1000，最小值為1"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 31,
    "sourceRow": 32,
    "cat": 0,
    "text": "FMEA可由誰更新？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "PE"
      },
      {
        "key": "B",
        "text": "ME"
      },
      {
        "key": "C",
        "text": "RD"
      },
      {
        "key": "D",
        "text": "以上皆可"
      }
    ]
  },
  {
    "id": 32,
    "sourceRow": 33,
    "cat": 0,
    "text": "某站點問題的改善行動之RPN值相同，SOD分別為a.763、b.736、c.673、d.927、e.729、f.279，問改善行動處理順序？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "abcdef"
      },
      {
        "key": "B",
        "text": "bdfaec"
      },
      {
        "key": "C",
        "text": "dabecf"
      },
      {
        "key": "D",
        "text": "dbaecf"
      }
    ]
  },
  {
    "id": 33,
    "sourceRow": 34,
    "cat": 0,
    "text": "FMEA分為幾種？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "System-FMEA、Process-FMEA"
      },
      {
        "key": "B",
        "text": "Design-FMEA、Test-FMEA"
      },
      {
        "key": "C",
        "text": "Design-FMEA、Process-FMEA"
      },
      {
        "key": "D",
        "text": "Design-FMEA、System-FMEA"
      }
    ]
  },
  {
    "id": 34,
    "sourceRow": 35,
    "cat": 0,
    "text": "下列那些條件下必需有action？",
    "answer": "E",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "RPN大於等於100時"
      },
      {
        "key": "B",
        "text": "所有RPN<100時，選TOP 3 RPN"
      },
      {
        "key": "C",
        "text": "Severity級數 × Occurrence級數 ≥42時"
      },
      {
        "key": "D",
        "text": "Detection級數 ≥8時"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 35,
    "sourceRow": 36,
    "cat": 0,
    "text": "請問何時PFMEA需連結至Control Plan？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "AP=L時"
      },
      {
        "key": "B",
        "text": "Severity ≥6"
      },
      {
        "key": "C",
        "text": "產品特性／製程特性被提列在PFMEA內或Severity ≥7時"
      },
      {
        "key": "D",
        "text": "Detection ranking ≥6"
      }
    ]
  },
  {
    "id": 36,
    "sourceRow": 37,
    "cat": 0,
    "text": "FMEA一般分為設計過程的失效模式分析Design FMEA及製造過程的失效模式分析Process FMEA。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 37,
    "sourceRow": 38,
    "cat": 0,
    "text": "請問FMEA的目的？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "提供「事前對問題的預防」"
      },
      {
        "key": "B",
        "text": "可評量產品／製程／工程中失效的因果以及潛在失效模式的嚴重程度"
      },
      {
        "key": "C",
        "text": "可記錄傳承技術能力"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 38,
    "sourceRow": 39,
    "cat": 0,
    "text": "請問什麼時候可更新FMEA？（複選，依原圖選項作答）",
    "answer": "E",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "定期REVIEW時"
      },
      {
        "key": "B",
        "text": "關鍵／重要工程變更（例如CCB…等）時"
      },
      {
        "key": "C",
        "text": "Customer complaints"
      },
      {
        "key": "D",
        "text": "Internal finding"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 39,
    "sourceRow": 40,
    "cat": 0,
    "text": "下列何者PFMEA更新的時機？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "人員每日換班時"
      },
      {
        "key": "B",
        "text": "變更生產場地的地點時"
      },
      {
        "key": "C",
        "text": "每次內部稽核之前"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 40,
    "sourceRow": 41,
    "cat": 0,
    "text": "若有製程變更將原來目視檢查改為儀器自動檢查，則會更新PFMEA的：",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "失效模式"
      },
      {
        "key": "B",
        "text": "失效效應"
      },
      {
        "key": "C",
        "text": "預防措施"
      },
      {
        "key": "D",
        "text": "偵測措施"
      }
    ]
  },
  {
    "id": 41,
    "sourceRow": 42,
    "cat": 0,
    "text": "下列何者可以降低嚴重度評分？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "設計變更"
      },
      {
        "key": "B",
        "text": "設計驗證"
      },
      {
        "key": "C",
        "text": "設計審查"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 42,
    "sourceRow": 43,
    "cat": 0,
    "text": "下列何者可降低偵出度？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "設計變更"
      },
      {
        "key": "B",
        "text": "員工訓練"
      },
      {
        "key": "C",
        "text": "改變檢驗方法"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 43,
    "sourceRow": 44,
    "cat": 0,
    "text": "關於FMEA手冊，以下敘述何者最適當？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "目的是應用更穩健的方法來處置產品和製造過程風險"
      },
      {
        "key": "B",
        "text": "採用了AIAG & VDA的最佳實務，應用過程導向的方法開發滿足兩個組織要求的FMEAs"
      },
      {
        "key": "C",
        "text": "一種團隊導向的、系統的、定性的分析方法，藉由強調缺陷預防來提高顧客滿意度"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 44,
    "sourceRow": 45,
    "cat": 0,
    "text": "關於FMEA手冊，以下敘述何者不正確或不完整？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "應用結構化的七步法，以提高FMEA跨功能小組的有效性和效率"
      },
      {
        "key": "B",
        "text": "除產品特定的FMEA外，基礎FMEA和家族FMEA被推薦用來建立和使用，因此，整體而言，人力、時間會耗費更多"
      },
      {
        "key": "C",
        "text": "在FMEA STEP1「規劃和準備」中應用5T（目的、時程、團隊、任務、工具）分析，以決定專案計畫的範圍"
      },
      {
        "key": "D",
        "text": "決定嚴重度S、發生度O和偵測度D的評分後，以措施優先度（AP）取代RPN（風險優先指數），決定風險降低措施的優先度"
      }
    ]
  },
  {
    "id": 45,
    "sourceRow": 46,
    "cat": 0,
    "text": "過程失效模式和效應分析（PFMEA）需考量的顧客是：",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "最終使用者和政府主管機關"
      },
      {
        "key": "B",
        "text": "外部顧客（交貨工廠、OEM製造／組裝廠）"
      },
      {
        "key": "C",
        "text": "內部顧客（下製程／你的工廠）"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 46,
    "sourceRow": 47,
    "cat": 0,
    "text": "關於DFMEA的風險評估及降低，以下敘述何者不正確或不完整？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "現行的預防管制描述了潛在原因如何運用已有的活動措施，來減輕其導致的失效模式；應當在設計中考慮安全餘裕，以作為預防管制"
      },
      {
        "key": "B",
        "text": "唯有設計變更，方能降低嚴重度評價等級"
      },
      {
        "key": "C",
        "text": "藉由設計變更去預防或管制一項或多項失效模式的原因／機制，方能降低發生度"
      },
      {
        "key": "D",
        "text": "DFMEA措施優先度（AP）評分表內容與PFMEA共用（相同）"
      }
    ]
  },
  {
    "id": 47,
    "sourceRow": 48,
    "cat": 0,
    "text": "關於DFMEA的風險評估及降低，以下敘述何者不正確或不完整？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "現行的預防管制描述了潛在原因如何運用已有的活動措施，來減輕其導致的失效模式；應當在設計中考慮安全餘裕，以作為預防管制"
      },
      {
        "key": "B",
        "text": "唯有設計變更，方能降低嚴重度評價等級"
      },
      {
        "key": "C",
        "text": "藉由設計變更去預防或管制一項或多項失效模式的原因／機制，方能降低發生度"
      },
      {
        "key": "D",
        "text": "DFMEA措施優先度（AP）評分表內容與PFMEA共用（相同）"
      }
    ]
  },
  {
    "id": 48,
    "sourceRow": 49,
    "cat": 0,
    "text": "關於PFMEA，以下敘述何者不正確或不完整？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "以結構樹／網或等效的過程流程圖，進行產品或過程功能的可視化"
      },
      {
        "key": "B",
        "text": "建立每一個過程功能的潛在失效效應、失效模式和失效原因之失效鏈"
      },
      {
        "key": "C",
        "text": "使用魚骨圖或失效網識別過程失效原因，典型的失效原因可能包括經典的石川4M類型但不僅限於：人員、機器／設備、材料（直接）和環境"
      },
      {
        "key": "D",
        "text": "顧客和供應商之間的合作（如：失效效應和嚴重度的傳遞和溝通）"
      }
    ]
  },
  {
    "id": 49,
    "sourceRow": 50,
    "cat": 0,
    "text": "關於PFMEA的風險評估及降低，以下敘述何者不正確或不完整？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "只有設計變更／製程修改，方能降低失效效應之嚴重度"
      },
      {
        "key": "B",
        "text": "要降低發生率，可運用操作員作業指導、機器能力研究和製程統計管制等，以預防缺點發生"
      },
      {
        "key": "C",
        "text": "增加品管檢驗頻率可作為長期的預防措施"
      },
      {
        "key": "D",
        "text": "較佳改善發生度的方法，是使用防錯（防呆）法"
      }
    ]
  },
  {
    "id": 50,
    "sourceRow": 51,
    "cat": 0,
    "text": "關於PFMEA STEP7「結果總結報告」，報告可包括的內容為？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "對已採取的和／或已計劃的處置高風險失效之措施及其狀態的總結，為進行中FMEA改善措施的計畫和時程承諾"
      },
      {
        "key": "B",
        "text": "專案計畫中的原始目標、最終狀態的說明、分析範圍和鑑別什麼是新的總結、由團隊決定的高風險失效和提供一份S/O/D評級表與措施優先排序方法（如措施優先度表）的總結"
      },
      {
        "key": "C",
        "text": "功能如何被開發的總結"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 51,
    "sourceRow": 52,
    "cat": 0,
    "text": "FMEA的精神，他強調「事前的預防」優於「事後的補救」。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 52,
    "sourceRow": 53,
    "cat": 1,
    "text": "工程問題改善需求來源有幾處？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ]
  },
  {
    "id": 53,
    "sourceRow": 54,
    "cat": 1,
    "text": "工程問題改善需求來源是什麼？",
    "answer": "E",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "客戶問題與需求"
      },
      {
        "key": "B",
        "text": "作業問題"
      },
      {
        "key": "C",
        "text": "製程改善"
      },
      {
        "key": "D",
        "text": "研發管理"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 54,
    "sourceRow": 55,
    "cat": 1,
    "text": "APQP共分幾個階段？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "5"
      },
      {
        "key": "E",
        "text": "6"
      }
    ]
  },
  {
    "id": 55,
    "sourceRow": 56,
    "cat": 1,
    "text": "工程問題改善需求來源是什麼？(1)客戶問題與需求 (2)作業問題 (3)製程改善 (4)研發管理",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、3"
      },
      {
        "key": "B",
        "text": "2、3"
      },
      {
        "key": "C",
        "text": "1、2、3"
      },
      {
        "key": "D",
        "text": "1、2、3、4"
      }
    ]
  },
  {
    "id": 56,
    "sourceRow": 57,
    "cat": 1,
    "text": "解決問題時應該運用那些問題解決程序？(1)問題解決八步驟 (2)F/A程序 (3)專案管理程序 (4)異常一覽表 (5)失效模式及影響分析 (6)異常管制計劃（OCAP）(7)CI/CA分析",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、4、6"
      },
      {
        "key": "B",
        "text": "1、2、3、4"
      },
      {
        "key": "C",
        "text": "3、4、5、6"
      },
      {
        "key": "D",
        "text": "1、2、3、4、5、6、7"
      }
    ]
  },
  {
    "id": 57,
    "sourceRow": 58,
    "cat": 1,
    "text": "解決問題時應該運用什麼輔助工具手法？(1)品管七工具 (2)基本統計 (3)管制圖 (4)統計檢定 (5)迴歸分析 (6)DOE (7)QFD",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、4、6"
      },
      {
        "key": "B",
        "text": "1、2、3、4、5、6、7"
      },
      {
        "key": "C",
        "text": "1、3、4、5、6"
      },
      {
        "key": "D",
        "text": "2、3、4、6"
      }
    ]
  },
  {
    "id": 58,
    "sourceRow": 59,
    "cat": 1,
    "text": "解決問題後應產出什麼文件？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "FMEA、Control Plan"
      },
      {
        "key": "B",
        "text": "OCAP、ECN、Quality Report"
      },
      {
        "key": "C",
        "text": "EMR、QC story、MRB report"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 59,
    "sourceRow": 60,
    "cat": 1,
    "text": "APQP第二階段需產出：",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "DFMEA"
      },
      {
        "key": "B",
        "text": "PFMEA"
      },
      {
        "key": "C",
        "text": "PPAP"
      },
      {
        "key": "D",
        "text": "MSA"
      }
    ]
  },
  {
    "id": 60,
    "sourceRow": 61,
    "cat": 1,
    "text": "APQP第三階段需產出：",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "DFMEA"
      },
      {
        "key": "B",
        "text": "PFMEA"
      },
      {
        "key": "C",
        "text": "PPAP"
      },
      {
        "key": "D",
        "text": "MSA"
      }
    ]
  },
  {
    "id": 61,
    "sourceRow": 62,
    "cat": 1,
    "text": "APQP第四階段需產出：",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "DFMEA"
      },
      {
        "key": "B",
        "text": "PFMEA"
      },
      {
        "key": "C",
        "text": "PPAP"
      },
      {
        "key": "D",
        "text": "8D"
      }
    ]
  },
  {
    "id": 62,
    "sourceRow": 63,
    "cat": 1,
    "text": "五大核心工具分別為APQP、FMEA、MSA、SPC及____。",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "PPAP"
      },
      {
        "key": "B",
        "text": "OCAP"
      },
      {
        "key": "C",
        "text": "Control Plan"
      }
    ]
  },
  {
    "id": 63,
    "sourceRow": 64,
    "cat": 1,
    "text": "FMEA主要分成兩種類別，分別為____-FMEA、P-FMEA。",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ]
  },
  {
    "id": 64,
    "sourceRow": 65,
    "cat": 1,
    "text": "「先期產品品質規劃」的英文縮寫為____。",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "PPAP"
      },
      {
        "key": "B",
        "text": "SPC"
      },
      {
        "key": "C",
        "text": "APQP"
      },
      {
        "key": "D",
        "text": "MSA"
      }
    ]
  },
  {
    "id": 65,
    "sourceRow": 66,
    "cat": 1,
    "text": "請排列出APQP各階段的順序：(1)產品和過程確認 (2)產品設計和開發 (3)過程設計和開發 (4)計劃和確定項目",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1234"
      },
      {
        "key": "B",
        "text": "2314"
      },
      {
        "key": "C",
        "text": "4231"
      },
      {
        "key": "D",
        "text": "3421"
      }
    ]
  },
  {
    "id": 66,
    "sourceRow": 67,
    "cat": 2,
    "text": "管制圖中出現的紅色三角形代表此筆資料有發出PSN。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 67,
    "sourceRow": 68,
    "cat": 2,
    "text": "OPGui執行Resample時，一定要使用相同的批號；執行Reconfirm時，不一定要使用相同的批號，亦可輸入Dummy。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 68,
    "sourceRow": 69,
    "cat": 2,
    "text": "當「產品處置流程」與「生產機台／製程狀況確認流程」均完成時PSN才可結案。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 69,
    "sourceRow": 70,
    "cat": 2,
    "text": "Ca為衡量製程平均值與規格中心值偏差的程度，因此Ca越大越好。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 70,
    "sourceRow": 71,
    "cat": 2,
    "text": "Cp為精密度為比較製程分散度與公差範圍，因此Cp越小越好。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 71,
    "sourceRow": 72,
    "cat": 2,
    "text": "OCAP（Out of Control Action Plan）異常處置行動措施是一種工具讓作業人員自行解決製程上的常見問題。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 72,
    "sourceRow": 73,
    "cat": 2,
    "text": "管制上下界限的距離為6倍的標準差。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 73,
    "sourceRow": 74,
    "cat": 2,
    "text": "日月光Cpk標準為1.67。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 74,
    "sourceRow": 75,
    "cat": 2,
    "text": "Ca與Cp應如何配合？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "Ca好就好"
      },
      {
        "key": "B",
        "text": "總和高就好"
      },
      {
        "key": "C",
        "text": "兩個均好才可以好"
      },
      {
        "key": "D",
        "text": "只要有一個值好就可"
      },
      {
        "key": "E",
        "text": "Cp好就可以了"
      }
    ]
  },
  {
    "id": 75,
    "sourceRow": 76,
    "cat": 2,
    "text": "管制界線的算法是以平均值加減幾倍標準差？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "一倍"
      },
      {
        "key": "B",
        "text": "二倍"
      },
      {
        "key": "C",
        "text": "三倍"
      },
      {
        "key": "D",
        "text": "四倍"
      }
    ]
  },
  {
    "id": 76,
    "sourceRow": 77,
    "cat": 2,
    "text": "管制圖最主要的用途？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "變更製造方法"
      },
      {
        "key": "B",
        "text": "規格制定"
      },
      {
        "key": "C",
        "text": "察覺非機遇變異"
      },
      {
        "key": "D",
        "text": "分析製程"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 77,
    "sourceRow": 78,
    "cat": 2,
    "text": "查詢管制圖時，下列何種顏色的點代表異因點？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "藍色"
      },
      {
        "key": "B",
        "text": "橘色"
      },
      {
        "key": "C",
        "text": "紅色"
      },
      {
        "key": "D",
        "text": "綠色"
      }
    ]
  },
  {
    "id": 78,
    "sourceRow": 79,
    "cat": 2,
    "text": "ASEK自動計算管制界線，如果達成下列哪些條件，將需要REVIEW CL？(1)管制界線超過規格 (2)管制界線等於規格 (3)標準差SIGMA=0 (4)標準差SIGMA>0 (5)PPK>3 (6)PPK<1.67",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、3、5"
      },
      {
        "key": "B",
        "text": "2、4、5、6"
      },
      {
        "key": "C",
        "text": "1、3、5"
      },
      {
        "key": "D",
        "text": "1、3、6"
      }
    ],
    "note": "原圖A與C選項內容相同，C欄答案為A，依原圖保留。"
  },
  {
    "id": 79,
    "sourceRow": 80,
    "cat": 2,
    "text": "SPC（統計製程管制）具有哪些特性？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "On line（即時偵測）"
      },
      {
        "key": "B",
        "text": "Real time（即時處理）"
      },
      {
        "key": "C",
        "text": "Predict（預測）"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 80,
    "sourceRow": 81,
    "cat": 2,
    "text": "下列何者為eSPC系統中已有之SPC rule？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "超出管制上／下界線"
      },
      {
        "key": "B",
        "text": "連續6點往上／往下"
      },
      {
        "key": "C",
        "text": "連續7點在管制中心線同一側"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 81,
    "sourceRow": 82,
    "cat": 2,
    "text": "常態分配時，μ±3σ其在外之機率為：",
    "answer": "E",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "31.74%"
      },
      {
        "key": "B",
        "text": "5.00%"
      },
      {
        "key": "C",
        "text": "4.55%"
      },
      {
        "key": "D",
        "text": "1.00%"
      },
      {
        "key": "E",
        "text": "0.27%"
      }
    ]
  },
  {
    "id": 82,
    "sourceRow": 83,
    "cat": 2,
    "text": "管制上下界限線規定為：",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "實線"
      },
      {
        "key": "B",
        "text": "虛線"
      },
      {
        "key": "C",
        "text": "黑色虛線"
      },
      {
        "key": "D",
        "text": "紅色虛線"
      },
      {
        "key": "E",
        "text": "藍色虛線"
      }
    ]
  },
  {
    "id": 83,
    "sourceRow": 84,
    "cat": 2,
    "text": "管制圖如果有點子超出下限外，是表示：",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "不良率降低"
      },
      {
        "key": "B",
        "text": "情況變好"
      },
      {
        "key": "C",
        "text": "不穩定"
      },
      {
        "key": "D",
        "text": "最理想"
      },
      {
        "key": "E",
        "text": "以上皆非"
      }
    ]
  },
  {
    "id": 84,
    "sourceRow": 85,
    "cat": 2,
    "text": "製程管制時，我們所依據的分配理論為：",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "常態分配"
      },
      {
        "key": "B",
        "text": "左偏分配"
      },
      {
        "key": "C",
        "text": "右偏分配"
      },
      {
        "key": "D",
        "text": "不規則分配"
      },
      {
        "key": "E",
        "text": "以上皆非"
      }
    ]
  },
  {
    "id": 85,
    "sourceRow": 86,
    "cat": 2,
    "text": "產品存在著變異，造成變異的因素可能有下列那些？",
    "answer": "E",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "人員"
      },
      {
        "key": "B",
        "text": "機台"
      },
      {
        "key": "C",
        "text": "物料"
      },
      {
        "key": "D",
        "text": "量測"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 86,
    "sourceRow": 87,
    "cat": 2,
    "text": "變異分成2種，機遇變異和非機遇變異，其中機遇變異的特性有哪些？(1)出現次數多 (2)出現次數少 (3)影響顯著 (4)影響微小 (5)須徹底調查",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "2、3"
      },
      {
        "key": "B",
        "text": "1、4"
      },
      {
        "key": "C",
        "text": "2、5"
      },
      {
        "key": "D",
        "text": "1、5"
      }
    ]
  },
  {
    "id": 87,
    "sourceRow": 88,
    "cat": 2,
    "text": "機遇變異來源來自微小且無法避免的，以下那些為機遇變異？(1)機器震動等變異 (2)不同人員的操作 (3)工作環境燈光 (4)操作員失誤",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、3"
      },
      {
        "key": "B",
        "text": "2、4"
      },
      {
        "key": "C",
        "text": "1、2、3"
      },
      {
        "key": "D",
        "text": "1、2、3、4"
      }
    ]
  },
  {
    "id": 88,
    "sourceRow": 89,
    "cat": 2,
    "text": "SPC概論中所提到的概念中，下列敘述何者為錯誤？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "Cpk值越小越好"
      },
      {
        "key": "B",
        "text": "管制圖Control Chart告訴我們何時應採取行動"
      },
      {
        "key": "C",
        "text": "量測計劃Measurement Plan告訴我們收集那些項目"
      },
      {
        "key": "D",
        "text": "OCAP告訴我們如何找出問題點真因並採取行動"
      }
    ]
  },
  {
    "id": 89,
    "sourceRow": 90,
    "cat": 2,
    "text": "某DCOP的Chart Criteria（管制圖分圖條件）為LEAD_COUNT/SPEC/SS/PLANT/，今收集了以下10筆資料，請問這些資料會描繪在____張管制圖中。",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "9"
      }
    ]
  },
  {
    "id": 90,
    "sourceRow": 91,
    "cat": 2,
    "text": "ASEK管制界線「自動計算」有兩個時機點，分別為每季一次及新圖滿____點時。",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "48"
      },
      {
        "key": "D",
        "text": "72"
      }
    ]
  },
  {
    "id": 91,
    "sourceRow": 92,
    "cat": 2,
    "text": "PSN查詢清單中，出現紅色字代表PSN超過____小時未處理？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "48"
      },
      {
        "key": "D",
        "text": "56"
      }
    ]
  },
  {
    "id": 92,
    "sourceRow": 93,
    "cat": 3,
    "text": "目前產線會依各站的製程能力訂定Special Low Yield。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 93,
    "sourceRow": 94,
    "cat": 3,
    "text": "水準不足良率損失（Chronics）：是良率水準不足，發生異常批數，其良率相對低於水準內的良率。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 94,
    "sourceRow": 95,
    "cat": 3,
    "text": "Die差異不可能為負值，一定是正值。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 95,
    "sourceRow": 96,
    "cat": 3,
    "text": "制定良率目標（Yield Goal）原則？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "以往製程能力之良率趨勢"
      },
      {
        "key": "B",
        "text": "業界標竿基準"
      },
      {
        "key": "C",
        "text": "公司良率政策"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 96,
    "sourceRow": 97,
    "cat": 3,
    "text": "A客戶投料10000顆產品，經過製造流程，產生了品質合格產品9935顆，有缺點的共65顆；B客戶投料1000顆產品，經過製造流程，產生了品質合格產品935顆，有缺點的共65顆，請問哪個客戶的良率較好？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "A客戶"
      },
      {
        "key": "B",
        "text": "B客戶"
      },
      {
        "key": "C",
        "text": "一樣好"
      }
    ]
  },
  {
    "id": 97,
    "sourceRow": 98,
    "cat": 3,
    "text": "投料假設為C，經過產線而產生的良品為A，不良品為D，將D經過Rework後的良品稱為B，則ASSY Yield率？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "B/C*100"
      },
      {
        "key": "B",
        "text": "A/C*100"
      },
      {
        "key": "C",
        "text": "(A+B)/C*100"
      }
    ]
  },
  {
    "id": 98,
    "sourceRow": 99,
    "cat": 3,
    "text": "若良率為99.65%，則DPM（Defect Per Million）為：",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "3500"
      },
      {
        "key": "B",
        "text": "2000"
      },
      {
        "key": "C",
        "text": "2500"
      },
      {
        "key": "D",
        "text": "5000"
      }
    ]
  },
  {
    "id": 99,
    "sourceRow": 100,
    "cat": 3,
    "text": "良率的重要性？",
    "answer": "E",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "製程能力"
      },
      {
        "key": "B",
        "text": "獲利能力"
      },
      {
        "key": "C",
        "text": "競爭能力"
      },
      {
        "key": "D",
        "text": "生存能力"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 100,
    "sourceRow": 101,
    "cat": 3,
    "text": "A客戶投料500顆產品，經過製造流程，產生了品質合格產品490顆，有缺點的共10顆，請問良率為何？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "99%"
      },
      {
        "key": "B",
        "text": "98%"
      },
      {
        "key": "C",
        "text": "97%"
      },
      {
        "key": "D",
        "text": "96%"
      }
    ]
  },
  {
    "id": 101,
    "sourceRow": 102,
    "cat": 4,
    "text": "下列何種實驗方法主要缺點為未能考慮介於因子間的任何可能之交互作用，實驗結論的再現性可能很差？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "全因子實驗設計"
      },
      {
        "key": "B",
        "text": "反應曲面法"
      },
      {
        "key": "C",
        "text": "單因子實驗法"
      },
      {
        "key": "D",
        "text": "田口實驗計劃"
      }
    ]
  },
  {
    "id": 102,
    "sourceRow": 103,
    "cat": 4,
    "text": "在田口實驗計劃中，S/N比：",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "越小越好"
      },
      {
        "key": "B",
        "text": "越大越好"
      },
      {
        "key": "C",
        "text": "接近1最好"
      },
      {
        "key": "D",
        "text": "接近0最好"
      }
    ]
  },
  {
    "id": 103,
    "sourceRow": 104,
    "cat": 4,
    "text": "下列關於RSM的敘述，何者錯誤？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "因子皆為連續型"
      },
      {
        "key": "B",
        "text": "採用三次方的模型"
      },
      {
        "key": "C",
        "text": "包含Central Composite Design"
      },
      {
        "key": "D",
        "text": "包含Box-Behnken Design"
      }
    ]
  },
  {
    "id": 104,
    "sourceRow": 105,
    "cat": 4,
    "text": "下列關於田口實驗計劃的敘述，何者錯誤？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "若有5個兩水準的因子不可以採用L8(2⁷)"
      },
      {
        "key": "B",
        "text": "若有4個兩水準的因子、1個三水準的因子，不可採用L8(2⁷)"
      },
      {
        "key": "C",
        "text": "為田口玄一博士所發展"
      },
      {
        "key": "D",
        "text": "L9(3⁴)表示實驗次數有9次"
      }
    ]
  },
  {
    "id": 105,
    "sourceRow": 106,
    "cat": 4,
    "text": "下列關於全因子實驗設計法的敘述，何者錯誤？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "若有2個三水準的因子、1個四水準的因子，實驗次數為36"
      },
      {
        "key": "B",
        "text": "若有3個四水準的因子，實驗次數為81"
      },
      {
        "key": "C",
        "text": "所有的排列組合皆被考慮"
      }
    ]
  },
  {
    "id": 106,
    "sourceRow": 107,
    "cat": 4,
    "text": "下列關於部分因子實驗設計法的敘述，何者錯誤？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "每個因子實驗的次數是平衡的"
      },
      {
        "key": "B",
        "text": "通常是作2ᵏ⁻ᵖ次實驗"
      },
      {
        "key": "C",
        "text": "所有的排列組合皆被考慮"
      }
    ]
  },
  {
    "id": 107,
    "sourceRow": 108,
    "cat": 4,
    "text": "下列敘述何者錯誤？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "拉力值為望大的品質特性"
      },
      {
        "key": "B",
        "text": "球大小為望目的品質特性"
      },
      {
        "key": "C",
        "text": "不良率為望小的品質特性"
      },
      {
        "key": "D",
        "text": "推球值為望小的品質特性"
      }
    ]
  },
  {
    "id": 108,
    "sourceRow": 109,
    "cat": 4,
    "text": "Bumping PE想要做一個印刷錫膏之田口實驗。他考慮設定刮刀壓力分別為4、6、8公斤，印刷次數分別為4、6、8次，印刷刮刀速度分別為20、25、30 mm/s，清潔刮刀壓力分別為2、4、6公斤，則各個實驗因子的水準數是多少？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "3333"
      },
      {
        "key": "B",
        "text": "3223"
      },
      {
        "key": "C",
        "text": "2233"
      },
      {
        "key": "D",
        "text": "3322"
      }
    ]
  },
  {
    "id": 109,
    "sourceRow": 110,
    "cat": 5,
    "text": "Control plan的CC是Critical Change的縮寫。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 110,
    "sourceRow": 111,
    "cat": 5,
    "text": "Evaluation method包含於control plan的Methods中。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 111,
    "sourceRow": 112,
    "cat": 5,
    "text": "在FMEA當中，RPN風險係數（危險優先等級）最高是1000。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 112,
    "sourceRow": 113,
    "cat": 5,
    "text": "在Control Plan中的CC，若該製程為關鍵的／重要的／顯著的，時均以什麼符號標註？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "+"
      },
      {
        "key": "B",
        "text": "*"
      },
      {
        "key": "C",
        "text": "-"
      },
      {
        "key": "D",
        "text": "="
      }
    ]
  },
  {
    "id": 113,
    "sourceRow": 114,
    "cat": 5,
    "text": "TCM全名為何？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "整合管制計劃"
      },
      {
        "key": "B",
        "text": "預防保養時間表"
      },
      {
        "key": "C",
        "text": "異常點改善計劃"
      },
      {
        "key": "D",
        "text": "量測系統分析"
      }
    ]
  },
  {
    "id": 114,
    "sourceRow": 115,
    "cat": 6,
    "text": "OCAP是經過層別法，將發生頻率高的異常項目暨OP可以處理的項目列皆OCAP。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 115,
    "sourceRow": 116,
    "cat": 6,
    "text": "OCAP主要的執行人員為ME及製造部OP。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 116,
    "sourceRow": 117,
    "cat": 6,
    "text": "OCAP的處理流程為ME優先於OP。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 117,
    "sourceRow": 118,
    "cat": 6,
    "text": "產品出現OOC或OOS品質異常問題製程處置則按那項處理？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "SOP"
      },
      {
        "key": "B",
        "text": "QC Story"
      },
      {
        "key": "C",
        "text": "客戶抱怨系統"
      },
      {
        "key": "D",
        "text": "OCAP"
      }
    ]
  },
  {
    "id": 118,
    "sourceRow": 119,
    "cat": 6,
    "text": "每份OCAP要有OCAP編號的用意為何？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "好看"
      },
      {
        "key": "B",
        "text": "SPC追蹤處理問題項目"
      },
      {
        "key": "C",
        "text": "客戶要稽核用"
      },
      {
        "key": "D",
        "text": "QA人員要用"
      }
    ]
  },
  {
    "id": 119,
    "sourceRow": 120,
    "cat": 6,
    "text": "以下有關OCAP敘述何者為非？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "OCAP是一套類似問題處理流程"
      },
      {
        "key": "B",
        "text": "讓第一線人員快速處理"
      },
      {
        "key": "C",
        "text": "能永久改善"
      },
      {
        "key": "D",
        "text": "經過層別分析"
      }
    ]
  },
  {
    "id": 120,
    "sourceRow": 121,
    "cat": 6,
    "text": "D3動作停止時間是在D____確認有效時才停止。",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "D4"
      },
      {
        "key": "B",
        "text": "D5"
      },
      {
        "key": "C",
        "text": "D6"
      },
      {
        "key": "D",
        "text": "D7"
      }
    ]
  },
  {
    "id": 121,
    "sourceRow": 122,
    "cat": 6,
    "text": "新OCAP中的處理項目何者為正確的？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "材料確認"
      },
      {
        "key": "B",
        "text": "產品處置"
      },
      {
        "key": "C",
        "text": "品質確認"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 122,
    "sourceRow": 123,
    "cat": 7,
    "text": "建立預訂單的系統為：",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "SAP"
      },
      {
        "key": "B",
        "text": "Notes"
      },
      {
        "key": "C",
        "text": "MES"
      },
      {
        "key": "D",
        "text": "WMS"
      }
    ]
  },
  {
    "id": 123,
    "sourceRow": 124,
    "cat": 7,
    "text": "下腳回收公告的頻率為多久一次？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "每週"
      },
      {
        "key": "B",
        "text": "一個月"
      },
      {
        "key": "C",
        "text": "每季"
      },
      {
        "key": "D",
        "text": "每年"
      }
    ]
  },
  {
    "id": 124,
    "sourceRow": 125,
    "cat": 7,
    "text": "遇見可疑人員在拾取下腳，下列何者正確？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "立即上前盤問"
      },
      {
        "key": "B",
        "text": "通報主管"
      },
      {
        "key": "C",
        "text": "通知安全組"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 125,
    "sourceRow": 126,
    "cat": 7,
    "text": "日月光高雄廠區下腳回收的地點共有幾處？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "17"
      }
    ]
  },
  {
    "id": 126,
    "sourceRow": 127,
    "cat": 7,
    "text": "下腳三方會辦指的是哪三方人員？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "倉管部"
      },
      {
        "key": "B",
        "text": "需求單位"
      },
      {
        "key": "C",
        "text": "下腳回收商"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 127,
    "sourceRow": 128,
    "cat": 7,
    "text": "以下何者非倉管部接收下腳的查檢重點？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "預訂單是否有隨貨"
      },
      {
        "key": "B",
        "text": "包裝數量是否與預訂單相符"
      },
      {
        "key": "C",
        "text": "是否有放行單"
      }
    ]
  },
  {
    "id": 128,
    "sourceRow": 129,
    "cat": 7,
    "text": "下腳報廢流程課程的目的為：",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "了解報廢流程"
      },
      {
        "key": "B",
        "text": "確保作業的正確性"
      },
      {
        "key": "C",
        "text": "提升下腳的回收率"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 129,
    "sourceRow": 130,
    "cat": 7,
    "text": "下腳回收流程中，需求單位的作業，下列何者不正確？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "聯絡下腳商"
      },
      {
        "key": "B",
        "text": "分類包裝"
      },
      {
        "key": "C",
        "text": "紀錄重量"
      },
      {
        "key": "D",
        "text": "建立SAP系統預定單"
      }
    ]
  },
  {
    "id": 130,
    "sourceRow": 131,
    "cat": 8,
    "text": "請問下列那個工程圖面可以找到Mold Thickness資訊？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "POD"
      },
      {
        "key": "B",
        "text": "SOD"
      },
      {
        "key": "C",
        "text": "BD"
      },
      {
        "key": "D",
        "text": "Cross Section"
      }
    ]
  },
  {
    "id": 131,
    "sourceRow": 132,
    "cat": 8,
    "text": "請問下列那個工程圖面可以找到Wire Type資訊？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "POD"
      },
      {
        "key": "B",
        "text": "SOD"
      },
      {
        "key": "C",
        "text": "BD"
      },
      {
        "key": "D",
        "text": "Cross Section"
      }
    ]
  },
  {
    "id": 132,
    "sourceRow": 133,
    "cat": 8,
    "text": "請問下列那個工程圖面可以找到Substrate Material資訊？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "POD"
      },
      {
        "key": "B",
        "text": "SOD"
      },
      {
        "key": "C",
        "text": "BD"
      },
      {
        "key": "D",
        "text": "Cross Section"
      }
    ]
  },
  {
    "id": 133,
    "sourceRow": 134,
    "cat": 8,
    "text": "請問下列那個工程圖面可以找到units per strip資訊？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "POD"
      },
      {
        "key": "B",
        "text": "SOD"
      },
      {
        "key": "C",
        "text": "BD"
      },
      {
        "key": "D",
        "text": "Cross Section"
      }
    ]
  },
  {
    "id": 134,
    "sourceRow": 135,
    "cat": 8,
    "text": "請問在cross section drawing，不會有下列那個資訊？(1)package size (2)copper thickness (3)core material (4)customer name",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、4"
      },
      {
        "key": "B",
        "text": "1、2、4"
      },
      {
        "key": "C",
        "text": "1、3、4"
      },
      {
        "key": "D",
        "text": "2、4"
      }
    ]
  },
  {
    "id": 135,
    "sourceRow": 136,
    "cat": 8,
    "text": "請問在BD drawing，可以找到哪些資訊？(1)package size (2)copper thickness (3)core material (4)customer name",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、4"
      },
      {
        "key": "B",
        "text": "1、2、4"
      },
      {
        "key": "C",
        "text": "1、3、4"
      },
      {
        "key": "D",
        "text": "2、4"
      }
    ]
  },
  {
    "id": 136,
    "sourceRow": 137,
    "cat": 8,
    "text": "請問在Inner Design Drawing，可以找到哪些資訊？(1)package size (2)lead count (3)substrate layer (4)customer name",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、4"
      },
      {
        "key": "B",
        "text": "1、2、4"
      },
      {
        "key": "C",
        "text": "1、2、3"
      },
      {
        "key": "D",
        "text": "2、4"
      }
    ]
  },
  {
    "id": 137,
    "sourceRow": 138,
    "cat": 8,
    "text": "在POD圖面，可以找到那些資訊？(1)package size (2)lead count (3)substrate layer (4)wire type",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、4"
      },
      {
        "key": "B",
        "text": "2、3、4"
      },
      {
        "key": "C",
        "text": "1、2"
      },
      {
        "key": "D",
        "text": "2、4"
      }
    ]
  },
  {
    "id": 138,
    "sourceRow": 139,
    "cat": 8,
    "text": "委外製作基板時，需提供那些工程圖面？(1)POD (2)SOD (3)Inner design drawing (4)Cross Section",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1、4"
      },
      {
        "key": "B",
        "text": "2、3、4"
      },
      {
        "key": "C",
        "text": "1、2"
      },
      {
        "key": "D",
        "text": "2、4"
      }
    ]
  },
  {
    "id": 139,
    "sourceRow": 140,
    "cat": 8,
    "text": "如果您看到一份圖號為AAA00010-0的文件，請問此為何種工程圖面？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "Strip outline drawing（SOD）"
      },
      {
        "key": "B",
        "text": "Inner design drawing"
      },
      {
        "key": "C",
        "text": "Package outline drawing（POD）"
      }
    ]
  },
  {
    "id": 140,
    "sourceRow": 141,
    "cat": 9,
    "text": "上板級的可靠度測試（Board-level reliability test）主要目的是評估下列哪個元件？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "錫球（Solder joint）"
      },
      {
        "key": "B",
        "text": "金線（Gold wire）"
      },
      {
        "key": "C",
        "text": "膠餅（Molding compound）"
      },
      {
        "key": "D",
        "text": "基板（Substrate）"
      }
    ]
  },
  {
    "id": 141,
    "sourceRow": 142,
    "cat": 9,
    "text": "上板級的掉落可靠度測試（Board-level drop reliability test）是根據下列哪個SPEC規範？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "CNS"
      },
      {
        "key": "B",
        "text": "MIL-STD"
      },
      {
        "key": "C",
        "text": "ISO"
      },
      {
        "key": "D",
        "text": "JEDEC"
      }
    ]
  },
  {
    "id": 142,
    "sourceRow": 143,
    "cat": 9,
    "text": "下列哪一個是造成封裝體翹曲（Warpage）的主要原因？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "Dimension mismatch"
      },
      {
        "key": "B",
        "text": "CTE mismatch"
      },
      {
        "key": "C",
        "text": "共振"
      },
      {
        "key": "D",
        "text": "製程不良"
      }
    ]
  },
  {
    "id": 143,
    "sourceRow": 144,
    "cat": 9,
    "text": "下列哪一項設備可以量測封裝體的翹曲（Warpage）？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "Shadow Moiré"
      },
      {
        "key": "B",
        "text": "Microforce tester"
      },
      {
        "key": "C",
        "text": "Nanoindentor"
      },
      {
        "key": "D",
        "text": "Focused ion beam"
      }
    ]
  },
  {
    "id": 144,
    "sourceRow": 145,
    "cat": 9,
    "text": "上板級的可靠度測試（Board-level reliability test）主要目的是評估下列哪個元件？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "錫球（Solder joint）"
      },
      {
        "key": "B",
        "text": "金線（Gold wire）"
      },
      {
        "key": "C",
        "text": "膠餅（Molding compound）"
      },
      {
        "key": "D",
        "text": "基板（Substrate）"
      }
    ]
  },
  {
    "id": 145,
    "sourceRow": 146,
    "cat": 9,
    "text": "上板級的掉落可靠度測試（Board-level drop reliability test）是根據下列哪個SPEC規範？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "JEDEC"
      },
      {
        "key": "B",
        "text": "MIL-STD"
      },
      {
        "key": "C",
        "text": "ISO"
      },
      {
        "key": "D",
        "text": "CNS"
      }
    ]
  },
  {
    "id": 146,
    "sourceRow": 147,
    "cat": 9,
    "text": "Precondition實驗中，定義產品須至少烘烤多久方可送至吸濕槽？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "24小時"
      },
      {
        "key": "B",
        "text": "48小時"
      },
      {
        "key": "C",
        "text": "96小時"
      }
    ]
  },
  {
    "id": 147,
    "sourceRow": 148,
    "cat": 9,
    "text": "Reflow是用什麼來決定作業的條件？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "厚度與體積"
      },
      {
        "key": "B",
        "text": "產品名稱"
      },
      {
        "key": "C",
        "text": "無須區分"
      }
    ]
  },
  {
    "id": 148,
    "sourceRow": 149,
    "cat": 9,
    "text": "前處理實驗前必須用幾倍顯微鏡做外觀檢查？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "20倍"
      },
      {
        "key": "B",
        "text": "40倍"
      },
      {
        "key": "C",
        "text": "60倍"
      }
    ]
  },
  {
    "id": 149,
    "sourceRow": 150,
    "cat": 9,
    "text": "超音波掃描需要以何物質為介質？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "空氣"
      },
      {
        "key": "B",
        "text": "汽油"
      },
      {
        "key": "C",
        "text": "水"
      }
    ]
  },
  {
    "id": 150,
    "sourceRow": 151,
    "cat": 9,
    "text": "MSL 3是指置於30°C／60%RH的環境架幾小時？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "168小時"
      },
      {
        "key": "B",
        "text": "192小時"
      },
      {
        "key": "C",
        "text": "120小時"
      }
    ]
  },
  {
    "id": 151,
    "sourceRow": 152,
    "cat": 9,
    "text": "QA實驗室環境應力測試項目，何者不是？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "TCT"
      },
      {
        "key": "B",
        "text": "Shock"
      },
      {
        "key": "C",
        "text": "HAST"
      },
      {
        "key": "D",
        "text": "HTST"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 152,
    "sourceRow": 153,
    "cat": 9,
    "text": "可靠度實驗的認證範圍裡，包含了哪幾項？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "前處理／環境應力測試"
      },
      {
        "key": "B",
        "text": "環境應力測試／機械應力測試"
      },
      {
        "key": "C",
        "text": "前處理／環境應力測試／機械應力測試"
      }
    ]
  },
  {
    "id": 153,
    "sourceRow": 154,
    "cat": 9,
    "text": "哪種測試條件屬於ASE的實驗可執行的種類？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "溫度"
      },
      {
        "key": "B",
        "text": "濕度"
      },
      {
        "key": "C",
        "text": "壓力"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 154,
    "sourceRow": 155,
    "cat": 9,
    "text": "依QA實驗室的標準，前處理實驗流程裡的外觀檢查的倍率為何？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "40X"
      },
      {
        "key": "B",
        "text": "100X"
      },
      {
        "key": "C",
        "text": "150X"
      }
    ]
  },
  {
    "id": 155,
    "sourceRow": 156,
    "cat": 9,
    "text": "前處理測試流程裡的reflow須執行幾次？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "1次"
      },
      {
        "key": "B",
        "text": "2次"
      },
      {
        "key": "C",
        "text": "3次"
      },
      {
        "key": "D",
        "text": "5次"
      }
    ]
  },
  {
    "id": 156,
    "sourceRow": 157,
    "cat": 9,
    "text": "Reliability包含package level、board level和system level reliability。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 157,
    "sourceRow": 158,
    "cat": 9,
    "text": "Reliability沒有e化系統，人員經由EXCEL檔案查詢實驗結果。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 158,
    "sourceRow": 159,
    "cat": 9,
    "text": "表面黏著性元件（SMD）在認證上要執行前處理測試（precondition test），其reflow條件統一沒有一種分類作業。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 159,
    "sourceRow": 160,
    "cat": 9,
    "text": "依ASE的標準，壓力鍋實驗（PCT）只適用在釘架產品上，所以QFN、QFP、SOP都可執行PCT。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 160,
    "sourceRow": 161,
    "cat": 9,
    "text": "-65～150°C的溫度循環實驗（TCT）的條件適用於FCBGA的產品，-55～125°C的溫度循環實驗（TCT）的條件適用於wire bond的產品。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 161,
    "sourceRow": 162,
    "cat": 10,
    "text": "量測結果與期望值的差異為準確度的表現。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 162,
    "sourceRow": 163,
    "cat": 10,
    "text": "各次量測結果的差異為精密度的表現。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 163,
    "sourceRow": 164,
    "cat": 10,
    "text": "系統誤差是由較固定的原因引起。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 164,
    "sourceRow": 165,
    "cat": 10,
    "text": "使用較高的標準去量測較低等級系統稱之為校正。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 165,
    "sourceRow": 166,
    "cat": 10,
    "text": "選用量測儀器時，不需考慮工件尺寸所要求精密程度。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 166,
    "sourceRow": 167,
    "cat": 10,
    "text": "同等級的系統相互比較稱之為比對。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 167,
    "sourceRow": 168,
    "cat": 10,
    "text": "量測工具解析度能力不會影響量測結果的判定。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 168,
    "sourceRow": 169,
    "cat": 10,
    "text": "國家度量衡標準實驗室為我國最高標準。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 169,
    "sourceRow": 170,
    "cat": 10,
    "text": "SI國際單位共有六種量類標準。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 170,
    "sourceRow": 171,
    "cat": 10,
    "text": "校正室通過TAF電量類認證。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 171,
    "sourceRow": 172,
    "cat": 10,
    "text": "使用儀器量測前，不需先確認儀器校正標籤是否有效。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 172,
    "sourceRow": 173,
    "cat": 10,
    "text": "關於追溯，下列何者錯誤？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "是不可間斷的"
      },
      {
        "key": "B",
        "text": "同等級比對的過程（平行比對）"
      },
      {
        "key": "C",
        "text": "可追至國家或國際標準"
      },
      {
        "key": "D",
        "text": "將較低層次量測系統追至上一階的已知量測系統"
      }
    ]
  },
  {
    "id": 173,
    "sourceRow": 174,
    "cat": 10,
    "text": "為實際掌握儀器的量測結果，下面敘述何者正確？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "儀器校正範圍應該必須涵蓋涵蓋使用範圍"
      },
      {
        "key": "B",
        "text": "不需考慮允許誤差"
      },
      {
        "key": "C",
        "text": "儀器只要可以使用即可，不需再做校正"
      },
      {
        "key": "D",
        "text": "生產優先，超過校正到期日仍可使用"
      }
    ]
  },
  {
    "id": 174,
    "sourceRow": 175,
    "cat": 10,
    "text": "有一Gauge規格為100.00mm，試問需選用下列哪一量測工具做量測才可正確執行？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "型號A：可測範圍0-100mm，解析度0.1mm"
      },
      {
        "key": "B",
        "text": "型號B：可測範圍0-200mm，解析度0.01mm"
      },
      {
        "key": "C",
        "text": "型號C：可測範圍0-500mm，解析度0.001mm"
      }
    ]
  },
  {
    "id": 175,
    "sourceRow": 176,
    "cat": 10,
    "text": "當校正儀器發生下列那些狀況需開校正管制單？",
    "answer": "E",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "遺失"
      },
      {
        "key": "B",
        "text": "變更製程停用"
      },
      {
        "key": "C",
        "text": "損壞報廢"
      },
      {
        "key": "D",
        "text": "轉移"
      },
      {
        "key": "E",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 176,
    "sourceRow": 177,
    "cat": 10,
    "text": "系統誤差特點有：",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "重複性"
      },
      {
        "key": "B",
        "text": "單向性"
      },
      {
        "key": "C",
        "text": "可測性"
      },
      {
        "key": "D",
        "text": "以上皆是"
      }
    ]
  },
  {
    "id": 177,
    "sourceRow": 178,
    "cat": 10,
    "text": "為實際掌握儀器的量測結果，下面敘述何者正確？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "儀器校正範圍應該必須涵蓋涵蓋使用範圍"
      },
      {
        "key": "B",
        "text": "不需考慮允許誤差"
      },
      {
        "key": "C",
        "text": "儀器只要可以使用即可，不需再做校正"
      },
      {
        "key": "D",
        "text": "生產優先，超過校正到期日仍可使用"
      }
    ]
  },
  {
    "id": 178,
    "sourceRow": 179,
    "cat": 10,
    "text": "下列何者不是隨機誤差的特性？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "重複性"
      },
      {
        "key": "B",
        "text": "原因不知"
      },
      {
        "key": "C",
        "text": "方向不定"
      },
      {
        "key": "D",
        "text": "正負不定"
      }
    ]
  },
  {
    "id": 179,
    "sourceRow": 180,
    "cat": 11,
    "text": "所有寄生參數會隨著長度增加而增加，線路越短，其RLC參數越小；反之，線路越長，其RLC參數越大。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 180,
    "sourceRow": 181,
    "cat": 11,
    "text": "特性阻抗的大小和線路長度無關，通常只決定於線路的寬度、介質的厚度、及介值的介電係數。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 181,
    "sourceRow": 182,
    "cat": 11,
    "text": "訊號傳輸通道的阻抗不匹配，並不會造成電性效能的額外損耗，所以阻抗匹配並不重要。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 182,
    "sourceRow": 183,
    "cat": 11,
    "text": "串音干擾（Cross-talk）是描述相鄰封裝導線之間的互相干擾現象。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 183,
    "sourceRow": 184,
    "cat": 11,
    "text": "在設計封裝內部線路時，如果特性阻抗（Characteristic impedance）沒有做好控制，並不會對訊號造成任何的損耗。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 184,
    "sourceRow": 185,
    "cat": 11,
    "text": "封裝內部線路越短，其寄生的RLC參數越小。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 185,
    "sourceRow": 186,
    "cat": 11,
    "text": "特性阻抗（Characteristic impedance）的大小通常只和線路長度有關。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 186,
    "sourceRow": 187,
    "cat": 11,
    "text": "何種方法無法改善串音干擾？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "增加線路與線路之間的距離"
      },
      {
        "key": "B",
        "text": "利用接地屏蔽的效應，在特定的線路兩旁或上下加接地線路或平面"
      },
      {
        "key": "C",
        "text": "選用無電鍍線製程，以去除電鍍線所產生之串音干擾"
      },
      {
        "key": "D",
        "text": "選用較厚之介質"
      }
    ]
  },
  {
    "id": 187,
    "sourceRow": 188,
    "cat": 11,
    "text": "在wirebond BGA基板設計中，哪一部分是可以控制特性阻抗？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "wire"
      },
      {
        "key": "B",
        "text": "Trace"
      },
      {
        "key": "C",
        "text": "PTH via"
      },
      {
        "key": "D",
        "text": "Solderball"
      }
    ]
  },
  {
    "id": 188,
    "sourceRow": 189,
    "cat": 11,
    "text": "下列何者「不是」電性實驗室所提供的服務項目？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "S-parameter報告"
      },
      {
        "key": "B",
        "text": "QA報告"
      },
      {
        "key": "C",
        "text": "特性阻抗（Characteristic impedance）控制"
      },
      {
        "key": "D",
        "text": "RLC報告"
      }
    ]
  },
  {
    "id": 189,
    "sourceRow": 190,
    "cat": 11,
    "text": "下列何者為電阻（resistance）的單位？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "Ohm，歐姆"
      },
      {
        "key": "B",
        "text": "H，亨利"
      },
      {
        "key": "C",
        "text": "F，法拉"
      }
    ]
  },
  {
    "id": 190,
    "sourceRow": 191,
    "cat": 11,
    "text": "下列何者為電感（inductance）的單位？",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "Ohm，歐姆"
      },
      {
        "key": "B",
        "text": "H，亨利"
      },
      {
        "key": "C",
        "text": "F，法拉"
      }
    ]
  },
  {
    "id": 191,
    "sourceRow": 192,
    "cat": 11,
    "text": "下列何者為電容（capacitance）的單位？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "Ohm，歐姆"
      },
      {
        "key": "B",
        "text": "H，亨利"
      },
      {
        "key": "C",
        "text": "F，法拉"
      }
    ]
  },
  {
    "id": 192,
    "sourceRow": 193,
    "cat": 12,
    "text": "「歐傑／化學分析電子儀（AES/XPS）」可以偵測的表面元素比「能量分散X-Ray光譜分析儀（EDX）」可偵測的表面元素愈準確。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 193,
    "sourceRow": 194,
    "cat": 12,
    "text": "X射線檢驗器（X-ray）為破壞的機台，是用來觀察產品內部之金屬材料是否有異常，例如wire short、ball lifting。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 194,
    "sourceRow": 195,
    "cat": 12,
    "text": "化學開蓋機是利用化學藥水蝕刻mold compound，讓產品內部暴露，以便觀察。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 195,
    "sourceRow": 196,
    "cat": 12,
    "text": "在品保實驗室內的開短路測試機（Open/short tester）無須合適的socket即可作業。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 196,
    "sourceRow": 197,
    "cat": 12,
    "text": "所有的化學實驗皆需做好安全防護並遵守工安規定。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 197,
    "sourceRow": 198,
    "cat": 12,
    "text": "品保實驗室所使用的蝕刻方式有濕蝕刻和乾蝕刻兩種。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 198,
    "sourceRow": 199,
    "cat": 12,
    "text": "超音波掃描機（SAT）是利用超音波與材料之反射係數，來顯示產品內各層介面之波形，便可判定失效之位置與介層。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 199,
    "sourceRow": 200,
    "cat": 12,
    "text": "超音波掃描機（SAT）為破壞性機台。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 200,
    "sourceRow": 201,
    "cat": 12,
    "text": "X-ray與SEM影像皆為灰階影像，灰階顏色的深淺是依據元素的何種特性？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "原子序"
      },
      {
        "key": "B",
        "text": "能階"
      },
      {
        "key": "C",
        "text": "族（如鹼金屬、鹼土金屬、鹵素、氮族元素、氧族元素）"
      }
    ]
  },
  {
    "id": 201,
    "sourceRow": 202,
    "cat": 12,
    "text": "下列何種產品必須使用探針機（probing station）輔助曲線追蹤儀（curvetracer）？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "45*45 mm覆晶產品（flip chip PKG）"
      },
      {
        "key": "B",
        "text": "20*20 mm釘架產品（QFP PKG）"
      },
      {
        "key": "C",
        "text": "3*3 mm裸晶產品（bare die）"
      }
    ]
  },
  {
    "id": 202,
    "sourceRow": 203,
    "cat": 12,
    "text": "化學蝕刻中的實坑實驗所用到的主要化學藥品為：",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "硫酸"
      },
      {
        "key": "B",
        "text": "鹽酸"
      },
      {
        "key": "C",
        "text": "王水"
      },
      {
        "key": "D",
        "text": "硝酸"
      }
    ]
  },
  {
    "id": 203,
    "sourceRow": 204,
    "cat": 12,
    "text": "失敗分析英文簡寫為：",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "DA"
      },
      {
        "key": "B",
        "text": "SA"
      },
      {
        "key": "C",
        "text": "FA"
      },
      {
        "key": "D",
        "text": "沒有簡寫"
      }
    ]
  },
  {
    "id": 204,
    "sourceRow": 205,
    "cat": 12,
    "text": "若使用化學藥品移除基板（substrate）上的綠漆（solder mark），此蝕刻步驟為：",
    "answer": "B",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "乾蝕刻"
      },
      {
        "key": "B",
        "text": "濕蝕刻"
      },
      {
        "key": "C",
        "text": "以上皆是"
      },
      {
        "key": "D",
        "text": "以上皆非"
      }
    ]
  },
  {
    "id": 205,
    "sourceRow": 206,
    "cat": 12,
    "text": "執行染料實驗後，觀察的位置呈現何種顏色，判定接合失效？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "黑"
      },
      {
        "key": "B",
        "text": "藍"
      },
      {
        "key": "C",
        "text": "紅"
      },
      {
        "key": "D",
        "text": "灰"
      }
    ]
  },
  {
    "id": 206,
    "sourceRow": 207,
    "cat": 12,
    "text": "歐傑／化學分析電子儀（AES/XPS）可以偵測到約多少深度的表面元素？",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "40"
      },
      {
        "key": "D",
        "text": "50"
      }
    ]
  },
  {
    "id": 207,
    "sourceRow": 208,
    "cat": 13,
    "text": "今每日需求A產品1800K、B產品2400K，請試算該需求於C站別所需之人員為____人。（UPH為：A=1.5K/hr，B=1K/hr；人機比1人10機，作業時間以20hrs計算）",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "18"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "17"
      },
      {
        "key": "D",
        "text": "27"
      }
    ]
  },
  {
    "id": 208,
    "sourceRow": 209,
    "cat": 13,
    "text": "今每日需求A產品2400K、B產品2100K，請試算該需求於C站別所需之人員為____人。（UPH為：A=1.5K/hr，B=1K/hr；人機比1人10機，作業時間以20hrs計算）",
    "answer": "D",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "15"
      },
      {
        "key": "B",
        "text": "16"
      },
      {
        "key": "C",
        "text": "17"
      },
      {
        "key": "D",
        "text": "19"
      }
    ]
  },
  {
    "id": 209,
    "sourceRow": 210,
    "cat": 13,
    "text": "承上題，若C站別之機台數為200台，若當日僅產出A產品1800K、B產品1680K，請試算該站別當日OEE為____%。（UPH為：A=1.5K/hr，B=1K/hr，作業時間以24hrs計算）",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "60"
      },
      {
        "key": "B",
        "text": "61"
      },
      {
        "key": "C",
        "text": "62"
      },
      {
        "key": "D",
        "text": "63"
      }
    ]
  },
  {
    "id": 210,
    "sourceRow": 211,
    "cat": 13,
    "text": "假設A機台一台最大產能=18K/D（UPH=1.5K/Hr，OEE=50%），預計投料30K/D，在不增加機台情況下，試問OEE需提升____%？",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "33"
      },
      {
        "key": "B",
        "text": "35"
      },
      {
        "key": "C",
        "text": "38"
      },
      {
        "key": "D",
        "text": "40"
      }
    ]
  },
  {
    "id": 211,
    "sourceRow": 212,
    "cat": 13,
    "text": "假設A機台一台最大產能=10K/D（UPH=0.7K/Hr，OEE=60%），預計投料15K/D，在不增加機台情況下，試問OEE需提升多少____%？",
    "answer": "C",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "25"
      },
      {
        "key": "B",
        "text": "26"
      },
      {
        "key": "C",
        "text": "29"
      },
      {
        "key": "D",
        "text": "31"
      }
    ],
    "note": "原圖答案為C（29%）；依24小時試算約為增加29.3個百分點，依原圖保留。"
  },
  {
    "id": 212,
    "sourceRow": 213,
    "cat": 13,
    "text": "假設某一站的UPH為18K/Hour，機台數量為10台，請試算該站1個月（30天）標準的產能為____K。（機台理想OEE 80%，作業時間以24hrs計算）",
    "answer": "A",
    "type": "choice",
    "options": [
      {
        "key": "A",
        "text": "103680"
      },
      {
        "key": "B",
        "text": "129600"
      },
      {
        "key": "C",
        "text": "43392"
      }
    ]
  },
  {
    "id": 213,
    "sourceRow": 214,
    "cat": 8,
    "text": "圖號編碼AAJ12345-0是Package Outline Drawing的圖號。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 214,
    "sourceRow": 215,
    "cat": 8,
    "text": "圖號編碼AAA12345-0是Package Outline Drawing的圖號。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 215,
    "sourceRow": 216,
    "cat": 8,
    "text": "圖號編碼AAJ12345-0是Package Outline Drawing的圖號。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 216,
    "sourceRow": 217,
    "cat": 8,
    "text": "POD（Package Outline Drawing）圖面會標示ASE Package的詳細外觀尺寸。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 217,
    "sourceRow": 218,
    "cat": 8,
    "text": "Package Outline Drawing會秀units per strip資訊。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 218,
    "sourceRow": 219,
    "cat": 8,
    "text": "Bonding Diagram會秀device name資訊。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 219,
    "sourceRow": 220,
    "cat": 8,
    "text": "Bonding Diagram圖號可以找出Inner圖面的圖號。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 220,
    "sourceRow": 221,
    "cat": 14,
    "text": "上板級的可靠度測試（Board-level reliability test）包含溫度循環測試（Thermal cycling test）、彎曲循環測試（Cycling bend test）、掉落測試（Drop test）及扭力測試（Twist test）。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 221,
    "sourceRow": 222,
    "cat": 14,
    "text": "應力（force）是用來判斷物件是否會破壞的一個指標（index）。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 222,
    "sourceRow": 223,
    "cat": 14,
    "text": "強度是物件抵抗被破壞的能力，物件承受之應力大於強度時就會產生破壞。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 223,
    "sourceRow": 224,
    "cat": 14,
    "text": "應力的來源包含製程、使用環境、可靠度測試…等。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 224,
    "sourceRow": 225,
    "cat": 14,
    "text": "應力數值模擬之主要目的為得到物件之強度。",
    "answer": "X",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  },
  {
    "id": 225,
    "sourceRow": 226,
    "cat": 14,
    "text": "脫層（Delamination）、矽晶片斷裂（Die crack）、錫球斷裂（Solder joint fracturing）、翹曲（Warpage）皆為封裝中常見的熱應力造成之破壞。",
    "answer": "O",
    "type": "tf",
    "options": [
      {
        "key": "O",
        "text": "正確"
      },
      {
        "key": "X",
        "text": "錯誤"
      }
    ]
  }
];
