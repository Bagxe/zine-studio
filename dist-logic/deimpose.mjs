// src/lib/zineArrangerData.ts
var VARIANT_TEMPLATES = {
  "half|duplex|portrait|side": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "half-por"
  },
  "half|duplex|landscape|side": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          }
        ]
      }
    ],
    "grid": "half-lnd"
  },
  "quarter|duplex|portrait|side|copy": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "e",
            "offset": 0,
            "copy": true,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": true,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": true,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "e",
            "offset": -1,
            "copy": true,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|duplex|portrait|top|copy": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": true,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r"
              ],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": true,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": true,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 1,
            "copy": true,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|duplex|landscape|side|copy": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "e",
            "offset": 0,
            "copy": true,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": true,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": true,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "e",
            "offset": -1,
            "copy": true,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|duplex|landscape|top|copy": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": true,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r"
              ],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": true,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": true,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 1,
            "copy": true,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|duplex|portrait|side": {
    "loopBound": 8,
    "k": 2,
    "useMN": true,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "n",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "m",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "m",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "n",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|duplex|portrait|top": {
    "loopBound": 8,
    "k": 2,
    "useMN": true,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "n",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r"
              ],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "bl",
            "base": "m",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "n",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "m",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|duplex|landscape|side": {
    "loopBound": 8,
    "k": 2,
    "useMN": true,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "n",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "m",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "m",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "n",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|duplex|landscape|top": {
    "loopBound": 8,
    "k": 2,
    "useMN": true,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "n",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r"
              ],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "bl",
            "base": "m",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "n",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "m",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|single|portrait|side": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|single|portrait|top": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "r",
                "t"
              ]
            }
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|single|landscape|side": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "quarter|single|landscape|top": {
    "loopBound": 4,
    "k": 2,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "r",
                "t"
              ]
            }
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "qtr-side"
  },
  "eighth|duplex|portrait|side": {
    "loopBound": 16,
    "k": 8,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "tml",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "tmr",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "tml",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "tmr",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "eig-por"
  },
  "eighth|duplex|portrait|top": {
    "loopBound": 16,
    "k": 8,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tml",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "tmr",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r"
              ],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "bmr",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tml",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "tmr",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "bmr",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "eig-por"
  },
  "eighth|duplex|landscape|side": {
    "loopBound": 16,
    "k": 8,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tml",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "tmr",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "bl",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tml",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "tmr",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "bmr",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "eig-lnd"
  },
  "eighth|duplex|landscape|top": {
    "loopBound": 16,
    "k": 8,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tml",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "tmr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": [],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r",
                "t"
              ],
              "folds": []
            }
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "tl",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "tml",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "tmr",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "eig-lnd"
  },
  "eighth|single|portrait|side": {
    "loopBound": 8,
    "k": 4,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tml",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "tmr",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "eig-por"
  },
  "eighth|single|portrait|top": {
    "loopBound": 8,
    "k": 4,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "tml",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tmr",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "br",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "eig-por"
  },
  "eighth|single|landscape|side": {
    "loopBound": 8,
    "k": 4,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tml",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "tmr",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "tr",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "bl",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "br",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "eig-lnd"
  },
  "eighth|single|landscape|top": {
    "loopBound": 8,
    "k": 4,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "tl",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tml",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "tmr",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "tr",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "bl",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "bml",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "bmr",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "r"
              ]
            }
          },
          {
            "area": "br",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "eig-lnd"
  },
  "12th|duplex|portrait|side": {
    "loopBound": 24,
    "k": 12,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twlv-por"
  },
  "12th|duplex|portrait|top": {
    "loopBound": 24,
    "k": 12,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "twlv-por"
  },
  "12th|duplex|landscape|side": {
    "loopBound": 24,
    "k": 12,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twlv-lnd"
  },
  "12th|duplex|landscape|top": {
    "loopBound": 24,
    "k": 12,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "twlv-lnd"
  },
  "12th|single|portrait|side": {
    "loopBound": 12,
    "k": 6,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twlv-por"
  },
  "12th|single|portrait|top": {
    "loopBound": 12,
    "k": 6,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "twlv-por"
  },
  "12th|single|landscape|side": {
    "loopBound": 12,
    "k": 6,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twlv-lnd"
  },
  "12th|single|landscape|top": {
    "loopBound": 12,
    "k": 6,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "twlv-lnd"
  },
  "16th|duplex|portrait|side": {
    "loopBound": 32,
    "k": 16,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "sxtn-por"
  },
  "16th|duplex|portrait|top": {
    "loopBound": 32,
    "k": 16,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "sxtn-por"
  },
  "16th|duplex|landscape|side": {
    "loopBound": 32,
    "k": 16,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "sxtn-lnd"
  },
  "16th|duplex|landscape|top": {
    "loopBound": 32,
    "k": 16,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "sxtn-lnd"
  },
  "16th|single|portrait|side": {
    "loopBound": 16,
    "k": 8,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "sxtn-por"
  },
  "16th|single|portrait|top": {
    "loopBound": 16,
    "k": 8,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r"
              ],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "sxtn-por"
  },
  "16th|single|landscape|side": {
    "loopBound": 16,
    "k": 8,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "sxtn-lnd"
  },
  "16th|single|landscape|top": {
    "loopBound": 16,
    "k": 8,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "sxtn-lnd"
  },
  "24th|duplex|portrait|side": {
    "loopBound": 48,
    "k": 24,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twfr-por"
  },
  "24th|duplex|portrait|top": {
    "loopBound": 48,
    "k": 24,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "twfr-por"
  },
  "24th|duplex|landscape|side": {
    "loopBound": 48,
    "k": 24,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twfr-lnd"
  },
  "24th|duplex|landscape|top": {
    "loopBound": 48,
    "k": 24,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "twfr-lnd"
  },
  "24th|single|portrait|side": {
    "loopBound": 24,
    "k": 12,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twfr-por"
  },
  "24th|single|portrait|top": {
    "loopBound": 24,
    "k": 12,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r"
              ],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twfr-por"
  },
  "24th|single|landscape|side": {
    "loopBound": 24,
    "k": 12,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "twfr-lnd"
  },
  "24th|single|landscape|top": {
    "loopBound": 24,
    "k": 12,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "twfr-lnd"
  },
  "32nd|duplex|portrait|side": {
    "loopBound": 64,
    "k": 32,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g07",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "thtw-por"
  },
  "32nd|duplex|portrait|top": {
    "loopBound": 64,
    "k": 32,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "thtw-por"
  },
  "32nd|duplex|landscape|side": {
    "loopBound": 64,
    "k": 32,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g61",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "thtw-lnd"
  },
  "32nd|duplex|landscape|top": {
    "loopBound": 64,
    "k": 32,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "thtw-lnd"
  },
  "32nd|single|portrait|side": {
    "loopBound": 32,
    "k": 16,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g06",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g07",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "thtw-por"
  },
  "32nd|single|portrait|top": {
    "loopBound": 32,
    "k": 16,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g17",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [
                "r"
              ],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "thtw-por"
  },
  "32nd|single|landscape|side": {
    "loopBound": 32,
    "k": 16,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "thtw-lnd"
  },
  "32nd|single|landscape|top": {
    "loopBound": 32,
    "k": 16,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g61",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "thtw-lnd"
  },
  "36th|duplex|portrait|side": {
    "loopBound": 72,
    "k": 36,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "thsx-por"
  },
  "36th|duplex|portrait|top": {
    "loopBound": 72,
    "k": 36,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "thsx-por"
  },
  "36th|duplex|landscape|side": {
    "loopBound": 72,
    "k": 36,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "thsx-lnd"
  },
  "36th|duplex|landscape|top": {
    "loopBound": 72,
    "k": 36,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "thsx-lnd"
  },
  "36th|single|portrait|side": {
    "loopBound": 36,
    "k": 18,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "thsx-por"
  },
  "36th|single|portrait|top": {
    "loopBound": 36,
    "k": 18,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "thsx-por"
  },
  "36th|single|landscape|side": {
    "loopBound": 36,
    "k": 18,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "thsx-lnd"
  },
  "36th|single|landscape|top": {
    "loopBound": 36,
    "k": 18,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "thsx-lnd"
  },
  "48th|duplex|portrait|side": {
    "loopBound": 96,
    "k": 48,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g07",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g47",
            "base": "s",
            "offset": 38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -40,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 40,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 42,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": -44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 44,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "e",
            "offset": -46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 46,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 39,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -39,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 37,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -37,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 47,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -47,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 45,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -45,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 43,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "e",
            "offset": -43,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 41,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "e",
            "offset": -41,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "frei-por"
  },
  "48th|duplex|portrait|top": {
    "loopBound": 96,
    "k": 48,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -47,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -45,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -43,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -41,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -39,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -37,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 47,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 45,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 43,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 41,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 39,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 37,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "frei-por"
  },
  "48th|duplex|landscape|side": {
    "loopBound": 96,
    "k": 48,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g61",
            "base": "s",
            "offset": 36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "e",
            "offset": -42,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 42,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "e",
            "offset": -44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 44,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "e",
            "offset": -46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 46,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "s",
            "offset": 41,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -41,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 39,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -39,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 37,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -37,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 47,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "e",
            "offset": -47,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 45,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "e",
            "offset": -45,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 43,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "e",
            "offset": -43,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "frei-lnd"
  },
  "48th|duplex|landscape|top": {
    "loopBound": 96,
    "k": 48,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -36,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 36,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -47,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -45,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -43,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -41,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -39,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -37,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 47,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 45,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 43,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 41,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 39,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 37,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "frei-lnd"
  },
  "48th|single|portrait|side": {
    "loopBound": 48,
    "k": 24,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g06",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g07",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g47",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g55",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "frei-por"
  },
  "48th|single|portrait|top": {
    "loopBound": 48,
    "k": 24,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g17",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g37",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g56",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "frei-por"
  },
  "48th|single|landscape|side": {
    "loopBound": 48,
    "k": 24,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g73",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "frei-lnd"
  },
  "48th|single|landscape|top": {
    "loopBound": 48,
    "k": 24,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g61",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "frei-lnd"
  },
  "64th|duplex|portrait|side": {
    "loopBound": 128,
    "k": 64,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g07",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g47",
            "base": "s",
            "offset": 38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": -44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "e",
            "offset": -46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -48,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g61",
            "base": "s",
            "offset": 48,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -50,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 50,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -52,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 52,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g66",
            "base": "e",
            "offset": -54,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g67",
            "base": "s",
            "offset": 54,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "e",
            "offset": -56,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 56,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "e",
            "offset": -58,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 58,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "e",
            "offset": -60,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 60,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g76",
            "base": "e",
            "offset": -62,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 62,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 39,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -39,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 37,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -37,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 47,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -47,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 45,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -45,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 43,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "e",
            "offset": -43,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 41,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "e",
            "offset": -41,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "s",
            "offset": 55,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -55,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 53,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -53,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 51,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -51,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g66",
            "base": "s",
            "offset": 49,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g67",
            "base": "e",
            "offset": -49,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 63,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "e",
            "offset": -63,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 61,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "e",
            "offset": -61,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 59,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "e",
            "offset": -59,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g76",
            "base": "s",
            "offset": 57,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "e",
            "offset": -57,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "sxfr-por"
  },
  "64th|duplex|portrait|top": {
    "loopBound": 128,
    "k": 64,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -48,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -50,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -52,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -54,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -56,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -58,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g66",
            "base": "e",
            "offset": -60,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g67",
            "base": "e",
            "offset": -62,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 48,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 50,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 52,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 54,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 56,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 58,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g76",
            "base": "s",
            "offset": 60,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 62,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -47,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -45,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -43,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -41,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -39,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -37,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 47,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 45,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 43,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 41,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 39,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 37,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -63,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -61,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -59,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -57,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -55,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -53,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g66",
            "base": "e",
            "offset": -51,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g67",
            "base": "e",
            "offset": -49,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 63,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 61,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 59,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 57,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 55,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 53,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g76",
            "base": "s",
            "offset": 51,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 49,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "sxfr-por"
  },
  "64th|duplex|landscape|side": {
    "loopBound": 128,
    "k": 64,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g07",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g47",
            "base": "s",
            "offset": 38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "e",
            "offset": -44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "e",
            "offset": -46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -48,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g61",
            "base": "s",
            "offset": 48,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -50,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 50,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -52,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 52,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g66",
            "base": "e",
            "offset": -54,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g67",
            "base": "s",
            "offset": 54,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "e",
            "offset": -56,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 56,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "e",
            "offset": -58,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 58,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "e",
            "offset": -60,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 60,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g76",
            "base": "e",
            "offset": -62,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 62,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g06",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g22",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "s",
            "offset": 39,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -39,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 37,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -37,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 47,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -47,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 45,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -45,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 43,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "e",
            "offset": -43,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 41,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "e",
            "offset": -41,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "s",
            "offset": 55,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -55,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 53,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -53,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 51,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -51,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g66",
            "base": "s",
            "offset": 49,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g67",
            "base": "e",
            "offset": -49,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 63,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "e",
            "offset": -63,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 61,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "e",
            "offset": -61,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 59,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "e",
            "offset": -59,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g76",
            "base": "s",
            "offset": 57,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "e",
            "offset": -57,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "sxfr-lnd"
  },
  "64th|duplex|landscape|top": {
    "loopBound": 128,
    "k": 64,
    "useMN": false,
    "sheetsPerIter": 2,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -32,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 32,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 34,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 36,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 38,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 40,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 42,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 44,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 46,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b",
              "l"
            ],
            "folds": []
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -48,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -50,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -52,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -54,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -56,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -58,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g66",
            "base": "e",
            "offset": -60,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g67",
            "base": "e",
            "offset": -62,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 48,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 50,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 52,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 54,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 56,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 58,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g76",
            "base": "s",
            "offset": 60,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 62,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          }
        ]
      },
      {
        "sheetInIter": 1,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g12",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g13",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g27",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g33",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -47,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -45,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -43,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -41,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "e",
            "offset": -39,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g45",
            "base": "e",
            "offset": -37,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g46",
            "base": "e",
            "offset": -35,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g47",
            "base": "e",
            "offset": -33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "s",
            "offset": 47,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 45,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 43,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 41,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 39,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 37,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 35,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 33,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -63,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -61,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -59,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -57,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g64",
            "base": "e",
            "offset": -55,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g65",
            "base": "e",
            "offset": -53,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g66",
            "base": "e",
            "offset": -51,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g67",
            "base": "e",
            "offset": -49,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 63,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 61,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 59,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 57,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 55,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 53,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g76",
            "base": "s",
            "offset": 51,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 49,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": []
          }
        ]
      }
    ],
    "grid": "sxfr-lnd"
  },
  "64th|single|portrait|side": {
    "loopBound": 64,
    "k": 32,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g06",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g07",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g47",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g66",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g67",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g73",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g75",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g76",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "sxfr-por"
  },
  "64th|single|portrait|top": {
    "loopBound": 64,
    "k": 32,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g16",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g47",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g61",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g66",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g67",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g76",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "sxfr-por"
  },
  "64th|single|landscape|side": {
    "loopBound": 64,
    "k": 32,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g01",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g02",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g03",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g04",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g05",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g06",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g07",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g14",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g15",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g16",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g24",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g25",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g26",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g34",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g35",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g36",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g41",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g42",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g43",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g47",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": []
          },
          {
            "area": "g51",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g52",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g53",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g61",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g62",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g63",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g66",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "t"
            ],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g67",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g72",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g73",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g74",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g75",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g76",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "l"
            ]
          }
        ]
      }
    ],
    "grid": "sxfr-lnd"
  },
  "64th|single|landscape|top": {
    "loopBound": 64,
    "k": 32,
    "useMN": false,
    "sheetsPerIter": 1,
    "sheets": [
      {
        "sheetInIter": 0,
        "cells": [
          {
            "area": "g00",
            "base": "e",
            "offset": -6,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g01",
            "base": "e",
            "offset": -7,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g02",
            "base": "e",
            "offset": -14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g03",
            "base": "e",
            "offset": -15,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g04",
            "base": "e",
            "offset": -22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g05",
            "base": "e",
            "offset": -23,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g06",
            "base": "e",
            "offset": -30,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g07",
            "base": "e",
            "offset": -31,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r",
              "t"
            ]
          },
          {
            "area": "g10",
            "base": "e",
            "offset": -5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g11",
            "base": "e",
            "offset": -8,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g12",
            "base": "e",
            "offset": -13,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g13",
            "base": "e",
            "offset": -16,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g14",
            "base": "e",
            "offset": -21,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g15",
            "base": "e",
            "offset": -24,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g16",
            "base": "e",
            "offset": -29,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g17",
            "base": "s",
            "offset": 31,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g20",
            "base": "e",
            "offset": -4,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g21",
            "base": "e",
            "offset": -9,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g22",
            "base": "e",
            "offset": -12,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g23",
            "base": "e",
            "offset": -17,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g24",
            "base": "e",
            "offset": -20,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g25",
            "base": "e",
            "offset": -25,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g26",
            "base": "e",
            "offset": -28,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g27",
            "base": "s",
            "offset": 30,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g30",
            "base": "e",
            "offset": -3,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g31",
            "base": "e",
            "offset": -10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g32",
            "base": "e",
            "offset": -11,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g33",
            "base": "e",
            "offset": -18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g34",
            "base": "e",
            "offset": -19,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g35",
            "base": "e",
            "offset": -26,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r",
              "t"
            ],
            "folds": []
          },
          {
            "area": "g36",
            "base": "e",
            "offset": -27,
            "copy": false,
            "rotate": false,
            "cuts": [
              "b"
            ],
            "folds": [
              "l"
            ]
          },
          {
            "area": "g37",
            "base": "s",
            "offset": 29,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g40",
            "base": "e",
            "offset": -2,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g41",
            "base": "s",
            "offset": 4,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g42",
            "base": "s",
            "offset": 5,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g43",
            "base": "s",
            "offset": 12,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g44",
            "base": "s",
            "offset": 13,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g45",
            "base": "s",
            "offset": 20,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g46",
            "base": "s",
            "offset": 21,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b",
              "l"
            ]
          },
          {
            "area": "g47",
            "base": "s",
            "offset": 28,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g50",
            "base": "e",
            "offset": -1,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g51",
            "base": "s",
            "offset": 3,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g52",
            "base": "s",
            "offset": 6,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g53",
            "base": "s",
            "offset": 11,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g54",
            "base": "s",
            "offset": 14,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g55",
            "base": "s",
            "offset": 19,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g56",
            "base": "s",
            "offset": 22,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g57",
            "base": "s",
            "offset": 27,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g60",
            "base": "e",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": [
              "b"
            ],
            "bcAlt": {
              "rotate": true,
              "cuts": [],
              "folds": [
                "t"
              ]
            }
          },
          {
            "area": "g61",
            "base": "s",
            "offset": 2,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g62",
            "base": "s",
            "offset": 7,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g63",
            "base": "s",
            "offset": 10,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g64",
            "base": "s",
            "offset": 15,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g65",
            "base": "s",
            "offset": 18,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g66",
            "base": "s",
            "offset": 23,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": [
              "b"
            ]
          },
          {
            "area": "g67",
            "base": "s",
            "offset": 26,
            "copy": false,
            "rotate": true,
            "cuts": [
              "r"
            ],
            "folds": [
              "t"
            ]
          },
          {
            "area": "g70",
            "base": "s",
            "offset": 0,
            "copy": false,
            "rotate": false,
            "cuts": [],
            "folds": []
          },
          {
            "area": "g71",
            "base": "s",
            "offset": 1,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g72",
            "base": "s",
            "offset": 8,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g73",
            "base": "s",
            "offset": 9,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g74",
            "base": "s",
            "offset": 16,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g75",
            "base": "s",
            "offset": 17,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          },
          {
            "area": "g76",
            "base": "s",
            "offset": 24,
            "copy": false,
            "rotate": false,
            "cuts": [
              "l"
            ],
            "folds": []
          },
          {
            "area": "g77",
            "base": "s",
            "offset": 25,
            "copy": false,
            "rotate": true,
            "cuts": [],
            "folds": [
              "r"
            ]
          }
        ]
      }
    ],
    "grid": "sxfr-lnd"
  }
};

// src/lib/zineArranger.ts
var PAPERS = {
  letter: { label: "US Letter (8.5\xD711in)", w: 8.5, h: 11 },
  "11x17": { label: "11\xD717in", w: 11, h: 17 },
  a4: { label: "A4 (210\xD7297mm)", w: 210 / 25.4, h: 297 / 25.4 },
  a3: { label: "A3 (297\xD7420mm)", w: 297 / 25.4, h: 420 / 25.4 }
};
function pagesPerSheet(fmt, doubleSided, quarterCopy) {
  switch (fmt) {
    case "half":
      return 4;
    case "quarter":
      if (doubleSided) return quarterCopy ? 4 : 8;
      return 4;
    case "eighth":
      return doubleSided ? 16 : 8;
    case "12th":
      return doubleSided ? 24 : 12;
    case "16th":
      return doubleSided ? 32 : 16;
    case "24th":
      return doubleSided ? 48 : 24;
    case "32nd":
      return doubleSided ? 64 : 32;
    case "36th":
      return doubleSided ? 72 : 36;
    case "48th":
      return doubleSided ? 96 : 48;
    case "64th":
      return doubleSided ? 128 : 64;
  }
}
function gridDims(fmt, zinePortrait) {
  switch (fmt) {
    case "half":
      return zinePortrait ? { cols: 2, rows: 1 } : { cols: 1, rows: 2 };
    case "quarter":
      return { cols: 2, rows: 2 };
    case "eighth":
      return zinePortrait ? { cols: 4, rows: 2 } : { cols: 2, rows: 4 };
    case "12th":
      return zinePortrait ? { cols: 6, rows: 2 } : { cols: 2, rows: 6 };
    case "16th":
      return { cols: 4, rows: 4 };
    case "24th":
      return zinePortrait ? { cols: 6, rows: 4 } : { cols: 4, rows: 6 };
    case "32nd":
      return zinePortrait ? { cols: 8, rows: 4 } : { cols: 4, rows: 8 };
    case "36th":
      return { cols: 6, rows: 6 };
    case "48th":
      return zinePortrait ? { cols: 8, rows: 6 } : { cols: 6, rows: 8 };
    case "64th":
      return { cols: 8, rows: 8 };
  }
}
function sheetIsPortrait(fmt, zinePortrait) {
  switch (fmt) {
    case "quarter":
    case "16th":
    case "36th":
    case "64th":
      return zinePortrait;
    default:
      return !zinePortrait;
  }
}
var NAMED_GRIDS = {
  "half-por": { tl: [0, 0], tr: [0, 1] },
  "half-lnd": { tr: [0, 0], tl: [1, 0] },
  "qtr-side": { tl: [0, 0], tr: [0, 1], bl: [1, 0], br: [1, 1] },
  "eig-por": { tl: [0, 0], tml: [0, 1], tmr: [0, 2], tr: [0, 3], bl: [1, 0], bml: [1, 1], bmr: [1, 2], br: [1, 3] },
  "eig-lnd": { bl: [0, 0], tl: [0, 1], bml: [1, 0], tml: [1, 1], bmr: [2, 0], tmr: [2, 1], br: [3, 0], tr: [3, 1] }
};
function areaPosition(area, grid) {
  const named = NAMED_GRIDS[grid];
  if (named) {
    const pos = named[area];
    if (!pos) throw new Error(`Unknown area ${area} in grid ${grid}`);
    return pos;
  }
  const m = area.match(/^g(\d)(\d)$/);
  if (!m) throw new Error(`Unknown area ${area} in grid ${grid}`);
  return [Number(m[1]), Number(m[2])];
}
function variantKey(o) {
  const side = o.format === "half" || o.doubleSided ? "duplex" : "single";
  const spine = o.format === "half" ? "side" : o.spineSide ? "side" : "top";
  const parts = [o.format, side, o.zinePortrait ? "portrait" : "landscape", spine];
  if (o.format === "quarter" && side === "duplex" && o.quarterCopy) parts.push("copy");
  return parts.join("|");
}
function buildZinePlan(sourcePages, opts) {
  const key = variantKey(opts);
  const template = VARIANT_TEMPLATES[key];
  if (!template) throw new Error(`No layout template for variant ${key}`);
  const pps = pagesPerSheet(opts.format, opts.doubleSided, opts.quarterCopy);
  const paddedCount = sourcePages === 0 ? 0 : Math.ceil(sourcePages / pps) * pps;
  const sheetsPerSig = opts.sigSheets > 0 ? opts.sigSheets : paddedCount / pps;
  const pagesPerSig = sheetsPerSig * pps;
  const { cols, rows } = gridDims(opts.format, opts.zinePortrait);
  const paper = PAPERS[opts.paper];
  const portraitSheet = sheetIsPortrait(opts.format, opts.zinePortrait);
  const sheetW = portraitSheet ? paper.w : paper.h;
  const sheetH = portraitSheet ? paper.h : paper.w;
  const K = template.k;
  const iterations = paddedCount / pps;
  const sheets = [];
  for (let i = 0; i < iterations; i++) {
    const sigCount = Math.floor(i / sheetsPerSig);
    const s = K * (i % sheetsPerSig) + sigCount * pagesPerSig;
    const e = (sigCount + 1) * pagesPerSig - K * (i % sheetsPerSig) - 1;
    const vals = { s, e, m: 0, n: 0 };
    if (template.useMN) {
      vals.m = s + pagesPerSig / 4;
      vals.n = e - pagesPerSig / 4;
    }
    const isBackCoverSheet = !opts.flipBackCover && e === paddedCount - 1;
    for (const st of template.sheets) {
      const cells = st.cells.map((ct) => {
        const [row, col] = areaPosition(ct.area, template.grid);
        const useAlt = isBackCoverSheet && ct.bcAlt != null;
        return {
          row,
          col,
          area: ct.area,
          page: vals[ct.base] + ct.offset,
          copy: ct.copy,
          rotate: useAlt ? ct.bcAlt.rotate : ct.rotate,
          cuts: useAlt ? ct.bcAlt.cuts : ct.cuts,
          folds: useAlt ? ct.bcAlt.folds : ct.folds
        };
      });
      sheets.push({
        sheetNo: sheets.length + 1,
        side: template.sheetsPerIter === 2 ? st.sheetInIter === 0 ? "front" : "back" : "single",
        cells
      });
    }
  }
  return {
    opts,
    variantKey: key,
    template,
    sourcePages,
    paddedCount,
    sheetsPerSig,
    pagesPerSig,
    gridRows: rows,
    gridCols: cols,
    sheetW,
    sheetH,
    cellW: sheetW / cols,
    cellH: sheetH / rows,
    sheets
  };
}

// src/lib/deimpose.ts
function deimposeMapping(numSides, opts) {
  if (numSides < 1) throw new Error("No sheet sides to de-impose");
  const pps = pagesPerSheet(opts.format, opts.doubleSided, opts.quarterCopy);
  const probe = buildZinePlan(pps, opts);
  const sheetsPerIter = probe.template.sheetsPerIter;
  if (numSides % sheetsPerIter !== 0) {
    throw new Error(
      sheetsPerIter === 2 ? `This is a double-sided layout: the upload must contain whole sheets (an even number of sides). Got ${numSides}.` : `Sheet side count ${numSides} does not fit this layout.`
    );
  }
  const pageCount = numSides / sheetsPerIter * pps;
  const plan = buildZinePlan(pageCount, opts);
  if (plan.sheets.length !== numSides) {
    throw new Error(
      `Layout expects ${plan.sheets.length} sheet side(s) for ${pageCount} pages, got ${numSides}.`
    );
  }
  const cells = [];
  plan.sheets.forEach((sheet, side) => {
    for (const c of sheet.cells) {
      if (c.copy) continue;
      cells.push({ page: c.page, side, row: c.row, col: c.col, rotate: c.rotate });
    }
  });
  cells.sort((a, b) => a.page - b.page);
  return { gridRows: plan.gridRows, gridCols: plan.gridCols, numSides, cells };
}
function splitSheetCells(sheet, rows, cols) {
  const cellW = sheet.width / cols;
  const cellH = sheet.height / rows;
  const out = [];
  for (let r = 0; r < rows; r++) {
    const rowArr = [];
    for (let c = 0; c < cols; c++) {
      const x = Math.round(c * cellW);
      const y = Math.round(r * cellH);
      const w = Math.round((c + 1) * cellW) - x;
      const h = Math.round((r + 1) * cellH) - y;
      const cv = document.createElement("canvas");
      cv.width = w;
      cv.height = h;
      const ctx = cv.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(sheet, x, y, w, h, 0, 0, w, h);
      rowArr.push(cv);
    }
    out.push(rowArr);
  }
  return out;
}
function rotateCanvas180(src) {
  const c = document.createElement("canvas");
  c.width = src.width;
  c.height = src.height;
  const ctx = c.getContext("2d");
  ctx.translate(src.width, src.height);
  ctx.rotate(Math.PI);
  ctx.drawImage(src, 0, 0);
  return c;
}
function buildDeimposedScrollPages(sheetCanvases, opts) {
  const mapping = deimposeMapping(sheetCanvases.length, opts);
  const grids = sheetCanvases.map((c) => splitSheetCells(c, mapping.gridRows, mapping.gridCols));
  const pages = mapping.cells.map((cell, idx) => {
    let canvas = grids[cell.side][cell.row][cell.col];
    if (cell.rotate) canvas = rotateCanvas180(canvas);
    return {
      index: idx + 1,
      label: `p${cell.page + 1}`,
      canvas,
      dataUrl: canvas.toDataURL("image/jpeg", 0.85)
    };
  });
  return { pages, mapping };
}
function blobToCanvas(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0);
      resolve(c);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not decode a sheet image"));
    };
    img.src = url;
  });
}
export {
  blobToCanvas,
  buildDeimposedScrollPages,
  deimposeMapping,
  splitSheetCells
};
