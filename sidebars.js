module.exports = {
  sidebar: [
  {
    type: "category",
    label: "Welcome",
    items: [
      "homepage/intro",
      "homepage/finding-help",
      "homepage/capabilities"
    ]
  },
  {
    "What's Newsletter": [
	{
          "type": "category",
          "label": "2023",
          "items": [
            {
              type: 'autogenerated',
              dirName: "whats-news/2023",
             }
          ]
        },
        {
          "type": "category",
          "label": "2022",
          "items": [
            {
              type: 'autogenerated',
              dirName: "whats-news/2022",
             }
          ]
        },
        {
          "type": "category",
          "label": "2021",
          "items": [
            {
              type: 'autogenerated',
              dirName: "whats-news/2021",
             }
          ]
        }
      ]
  },
  {
    "Getting Started":
    [
      "getting-started/access",
     {
      type: "category",
      label: "Data Scientists",
      items: [
        {
          type: 'autogenerated',
          dirName: "getting-started/data-scientists",
        }
      ],
    },
    {
      type: "category",
      label: "Engineers",
      "items": [
        {
          type: 'autogenerated',
          dirName: "getting-started/engineers",
        }
      ]
    },
    "getting-started/for-product",
    "getting-started/for-leadership"
    ]
  },
    {
      "type": "category",
      "label": "Experimentation Workflow",
      "items": [
        {
          type: 'autogenerated',
          dirName: "workflow",
         }
      ]
    },
    {
      "Deep Dives": [
        {
          type: "category",
          label: "Jetstream",
          items: [
            "jetstream/jetstream",
            "jetstream/metrics",
            "jetstream/statistics",
            "jetstream/outcomes",
            "jetstream/configuration",
            "jetstream/data-products",
            "jetstream/operations",
            "jetstream/troubleshooting",
            "jetstream/testing",
            {
              type: "link",
              label: "GitHub Repo",
              href: "https://github.com/mozilla/jetstream",
            },
          ],
        },
        {
          "type": "category",
          "label": "Data topics",
          "items": [
            {
              type: 'autogenerated',
              dirName: "deep-dives/data", // Source folder to generate the sidebar slice from (relative to docs)
             }
          ]
        },
        {
          "type": "category",
          "label": "Desktop topics",
          "items": [
            {
              type: 'autogenerated',
              dirName: "deep-dives/desktop", // Source folder to generate the sidebar slice from (relative to docs)
             }
          ]
        },
        {
          "type": "category",
          "label": "Mobile topics",
          "items": [
            {
              type: 'autogenerated',
              dirName: "deep-dives/mobile", // Source folder to generate the sidebar slice from (relative to docs)
             }
          ]
        },
        {
          "type": "category",
          "label": "Experimenter topics",
          "items": [
            {
              type: 'autogenerated',
              dirName: "deep-dives/experimenter", // Source folder to generate the sidebar slice from (relative to docs)
             }
          ]
        },
        {
          "type": "category",
          "label": "Specifications",
          "items": [
            {
              type: 'autogenerated',
              dirName: "deep-dives/specifications", // Source folder to generate the sidebar slice from (relative to docs)
             }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Experimentation Cookbook",
      "items": [
        {
          type: 'autogenerated',
          dirName: "cookbook/fml",
         }
      ]
    },
    {
      "type": "category",
      "label": "FAQ",
      "items": [
        {
          type: 'autogenerated',
          dirName: "faq",
         }
      ]
    },
    {
      "type": "doc",
      "label": "Glossary",
      "id": "glossary",
    },
    {
      type: "category",
      label: "Additional Links",
      items: [
        {
          type: 'autogenerated',
          dirName: "additional-links",
         },
        {
          type: "link",
          label: "Experimenter GH Repo",
          href: "https://github.com/mozilla/experimenter",
        },
        {
          type: "link",
          label: "How to Launch a Nimbus Experiment",
          href: "https://mozilla-hub.atlassian.net/wiki/spaces/FJT/pages/11469776/Nimbus+Onboarding#NimbusOnboarding-LaunchingExperimentsusingNimbus!",
        },
        {
          type: "link",
          label: "Nimbus Data Transfer Object",
          href: "https://mozilla-hub.atlassian.net/wiki/spaces/FJT/pages/11469537/The+Nimbus+Data+Transfer+Object+DTO",
        },
        {
          type: "link",
          label: "Experiment Telemetry",
          href: "https://mozilla-hub.atlassian.net/wiki/spaces/FJT/pages/11469458/Nimbus+Engineering#NimbusEngineering-ExperimentTelemetry",
        },
        {
          type: "link",
          label: "Lessons Learned",
          href: "https://mozilla-hub.atlassian.net/wiki/spaces/FJT/pages/11470136/Lessons+Learned+-+Experiment+Incidents+and+Close+Calls",
        },
      ],
    },
  ]
};
