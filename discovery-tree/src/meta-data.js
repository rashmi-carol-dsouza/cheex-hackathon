import { v4 as uuidv4 } from 'uuid';

const cheexCategories = [
  "anal",
  "ASMR",
  "bdsm",
  "BIPOC",
  "bisexual",
  "blowjob",
  "body hair",
  "bondage",
  "calming",
  "clit-stimulation",
  "communication",
  "couple",
  "Culture",
  "dirty talk",
  "disability",
  "eating out",
  "educational",
  "empowerment",
  "explorative",
  "fantasy",
  "Feminism",
  "fingering",
  "gangbang",
  "masturbation",
  "handjob",
  "health",
  "public",
  "kinky",
  "LGBTQIA+",
  "lust",
  "massage",
  "masturbation",
  "meditative",
  "Mental Health",
  "Moaning",
  "No Strings Attached",
  "non-binary",
  "Non-Monogamy",
  "NTMY",
  "orgasm",
  "Orgasm Denial",
  "outdoor",
  "pegging",
  "penetration",
  "penis topic",
  "poc performer",
  "power play",
  "queer",
  "real couple",
  "Relationship",
  "Romance & Love",
  "safer sex",
  "sensual",
  "sex positivity",
  "sex toys",
  "sex trends",
  "Sex work",
  "sexual self-esteem",
  "Sexucation",
  "soft",
  "spirituality",
  "squirting",
  "strap-on",
  "Tantra",
  "tattoos",
  "trans",
  "voyeur",
  "voyeurism",
  "Vulva",
  "Wellness",
  "workshop",
];

export const categories = [
  {
    title: "BDSM",
    children: [
      {
        title: "Bondage",
        children: [
          { title: "masturbation", progression_level: "novice" },
          { title: "collaring", progression_level: "novice" },
          { title: "collared", progression_level: "proficient" },
          { title: "rope", progression_level: "expert" },
          { title: "one-rope-ties", progression_level: "novice" },
          {
            title: "shibari-floorwork",
            progression_level: "proficient",
            description:
              "Shibari is a Japanese style of bondage, it's known as a kink but it's more than that. It's a kind of art, while tying the rope around someone's body you're making different patterns and connecting with that person. Floorwork means the tied person is on the floor and is usually less dangerous thant suspensions for which you require more training.",
          },
          { title: "crab-tie", progression_level: "expert" },
        ],
      },
      {
        title: "Impact",
        children: [
          { title: "spanking", progression_level: "novice" },
          { title: "strap-on", progression_level: "proficient" },
          {
            title: "hair-pulling",
            progression_level: "proficient",
            description:
              "It consists of grabbing the hair of a partner in order to generate pleasure and pain. No matter the length of your partner's hair, always make sure you are pulling from the base of the head. Grabbing from the base is comfortable without causing damage to the scalp or hair. Pulling from the ends can cause tension that is sharp and unfavorable! Make sure when pulling, you avoid straining the neck through hard or jerking pulls.",
          },
          {
            title: "nipple-sucking",
            progression_level: "novice",
            description:
              "Tit torture refers to any of several erotic BDSM activities focusing solely on inflicting pain on the breast, nipples, and areola for sexual gratification. Breast-oriented BDSM activities range from relatively safe and benign, such as the use of clothespins on the nipples, light flagellation, or simple breast bondage to activities that can include great risk, such as more severe caning, amateur piercing, or being suspended by the breasts.",
          },
          {
            title: "nipple-piching",
            progression_level: "expert",
            description:
              "Tit torture refers to any of several erotic BDSM activities focusing solely on inflicting pain on the breast, nipples, and areola for sexual gratification. Breast-oriented BDSM activities range from relatively safe and benign, such as the use of clothespins on the nipples, light flagellation, or simple breast bondage to activities that can include great risk, such as more severe caning, amateur piercing, or being suspended by the breasts.",
          },
          {
            title: "nipple-clamping",
            progression_level: "expert",
            description:
              "Tit torture refers to any of several erotic BDSM activities focusing solely on inflicting pain on the breast, nipples, and areola for sexual gratification. Breast-oriented BDSM activities range from relatively safe and benign, such as the use of clothespins on the nipples, light flagellation, or simple breast bondage to activities that can include great risk, such as more severe caning, amateur piercing, or being suspended by the breasts.",
          },
          {
            title: "hair-ruffing",
            progression_level: "novice",
            description:
              "It consists of grabbing the hair of a partner in order to generate pleasure and pain. No matter the length of your partner's hair, always make sure you are pulling from the base of the head. Grabbing from the base is comfortable without causing damage to the scalp or hair. Pulling from the ends can cause tension that is sharp and unfavorable! Make sure when pulling, you avoid straining the neck through hard or jerking pulls.",
          },
          { title: "one-rope-ties", progression_level: "expert" },
        ],
      },
    ],
  },
  {
    title: "Massage",
    children: [
      {
        title: "Solo",
        children: [
          { title: "soft", progression_level: "novice" },
          { title: "mild", progression_level: "proficient" },
          { title: "intense", progression_level: "expert" },
        ],
      },
      {
        title: "Couple",
        children: [
          { title: "soft", progression_level: "novice" },
          { title: "mild", progression_level: "proficient" },
          { title: "intense", progression_level: "expert" },
        ],
      },
    ],
  },
  {
    title: "Oral",
    children: [
      {
        title: "Blowjob",
        children: [
          { title: "blowjob", progression_level: "novice" },
          { title: "deep-throat", progression_level: "proficient" },
          {
            title: "mouth-fucking",
            progression_level: "expert",
            description:
              "To aggressively and vigorously penetrate a mouth and throat. It is commonly found in domination scenes.",
          },
        ],
      },
    ],
  },
  {
    title: "Anal",
    children: [
      {
        title: "Anal penetration",
        children: [
          { title: "anal-fingering", progression_level: "novice" },
          {
            title: "anal-penetration",
            progression_level: "proficient",
            description:
              "Anal penetration is a form of sexual penetration. It involves penetrating the anus. It is important to prepare the anus slowly for penetration by starting by smaller objects / fingers and using lubricant. One thing to keep in mind with vulva owner is to not use fingers/ toys / penis that have been used in the anus in the vagina without washing them, at the risk of developing infections.",
          },
          { title: "anal-fisting", progression_level: "expert" },
        ],
      },
    ],
  },
  {
    title: "Masturbation",
    children: [
      {
        title: "Toys",
        children: [
          { title: "vibrator", progression_level: "novice" },
          {
            title: "magic-wand",
            progression_level: "proficient",
            description:
              "A wand vibrator is a massaging device which is often also used as a vibrator and a sex toy. It consists of a rounded vibrating ball attached to a handle. It is meant to be used on the vulva and especially to stimulate the clitoris. It is known to encourage squirting and tt can be combined with other masturbation techniques or during penetration.",
          },
          { title: "dildo", progression_level: "expert" },
        ],
      },
    ],
  },
  {
    title: "Talking",
    children: [
      {
        title: "Sex Talk",
        children: [
          {
            title: "dirty-talk",
            progression_level: "novice",
            description:
              "To engage in sexually explicit speech or conversation intended to seduce or arouse someone. It can be used during a sex act, but also on the phone or in written.",
          },
          { title: "rough-talk", progression_level: "proficient" },
          { title: "insult", progression_level: "expert" },
        ],
      },
    ],
  },
];

const withUniqueIds = (categories) => {
  const categoriesWithUniqueIds = categories.map((category) => {
    category.id = uuidv4();
    if (categories.children) {
      withUniqueIds(categories.children);
    }
    return category;
  });

  return categoriesWithUniqueIds;
};

export const enrichedCategories = withUniqueIds(categories);
