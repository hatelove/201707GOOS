jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "BudgetQuery.feature",
      "Feature": {
        "Name": "BudgetQuery",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Query budget within single month",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "go to query budget page"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Budget table existed budgets",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "YearMonth"
                  ],
                  "DataRows": [
                    [
                      "30000",
                      "2017-04"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "query from \"2017-04-05\" to \"2017-04-14\""
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "show budget 10000.00"
              }
            ],
            "Tags": [
              "@CleanBudgets"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Query budget within 3 month",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "go to query budget page"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Budget table existed budgets",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "YearMonth"
                  ],
                  "DataRows": [
                    [
                      "6200",
                      "2017-03"
                    ],
                    [
                      "9000",
                      "2017-04"
                    ],
                    [
                      "3100",
                      "2017-05"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "query from \"2017-03-22\" to \"2017-05-05\""
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "show budget 11500.00"
              }
            ],
            "Tags": [
              "@CleanBudgets"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": [
          "@web"
        ]
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "BudgetCreate.feature",
      "Feature": {
        "Name": "BudgetCreate",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Add a budget successfully",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "go to adding budget page"
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I add a buget 2000 for \"2017-10\""
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "it should display \"added successfully\""
              }
            ],
            "Tags": [
              "@CleanBudgets"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Add a budget when there was existed a record of unique month",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "go to adding budget page"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Budget table existed budgets",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "YearMonth"
                  ],
                  "DataRows": [
                    [
                      "999",
                      "2017-10"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I add a buget 2000 for \"2017-10\""
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "it should display \"updated successfully\""
              }
            ],
            "Tags": [
              "@CleanBudgets"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": [
          "@web"
        ]
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "BudgetController.feature",
      "Feature": {
        "Name": "BudgetController",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Add a budget record",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "add a budget",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "Month"
                  ],
                  "DataRows": [
                    [
                      "2000",
                      "2017-02"
                    ]
                  ]
                }
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "ViewBag should have a message for adding successfully"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "it should exist a budget record in budget table",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "YearMonth"
                  ],
                  "DataRows": [
                    [
                      "2000",
                      "2017-02"
                    ]
                  ]
                }
              }
            ],
            "Tags": [
              "@CleanBudgets"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Update a budget record When the budget record existed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Budget table existed budgets",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "YearMonth"
                  ],
                  "DataRows": [
                    [
                      "999",
                      "2017-02"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "add a budget",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "Month"
                  ],
                  "DataRows": [
                    [
                      "2000",
                      "2017-02"
                    ]
                  ]
                }
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "ViewBag should have a message for updating successfully"
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "it should exist a budget record in budget table",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "YearMonth"
                  ],
                  "DataRows": [
                    [
                      "2000",
                      "2017-02"
                    ]
                  ]
                }
              }
            ],
            "Tags": [
              "@CleanBudgets"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Query budget within single month",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Budget table existed budgets",
                "TableArgument": {
                  "HeaderRow": [
                    "Amount",
                    "YearMonth"
                  ],
                  "DataRows": [
                    [
                      "60000",
                      "2017-04"
                    ]
                  ]
                }
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "query",
                "TableArgument": {
                  "HeaderRow": [
                    "StartDate",
                    "EndDate"
                  ],
                  "DataRows": [
                    [
                      "2017-04-05",
                      "2017-04-14"
                    ]
                  ]
                }
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "ViewData.Model should be",
                "TableArgument": {
                  "HeaderRow": [
                    "StartDate",
                    "EndDate",
                    "Amount"
                  ],
                  "DataRows": [
                    [
                      "2017-04-05",
                      "2017-04-14",
                      "20000"
                    ]
                  ]
                }
              }
            ],
            "Tags": [
              "@CleanBudgets"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    }
  ],
  "Configuration": {
    "GeneratedOn": "13 六月 2017 13:39:03"
  }
});