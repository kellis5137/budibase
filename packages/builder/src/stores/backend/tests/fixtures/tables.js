export const SOME_TABLES = [
  {
    type: "table",
    views: {},
    name: "Guest",
    schema: {
      "Auto ID": {
        name: "Auto ID",
        type: "number",
        subtype: "autoID",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "number",
          presence: false,
          numericality: {
            greaterThanOrEqualTo: "",
            lessThanOrEqualTo: "",
          },
        },
        lastID: 1,
      },
      "Created By": {
        name: "Created By",
        type: "link",
        subtype: "createdBy",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "array",
          presence: false,
        },
        tableId: "ta_users",
        fieldName: "Guest-Created By",
        relationshipType: "many-to-many",
      },
      "Created At": {
        name: "Created At",
        type: "datetime",
        subtype: "createdAt",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "string",
          length: {},
          presence: false,
          datetime: {
            latest: "",
            earliest: "",
          },
        },
      },
      "Updated By": {
        name: "Updated By",
        type: "link",
        subtype: "updatedBy",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "array",
          presence: false,
        },
        tableId: "ta_users",
        fieldName: "Guest-Updated By",
        relationshipType: "many-to-many",
      },
      "Updated At": {
        name: "Updated At",
        type: "datetime",
        subtype: "updatedAt",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "string",
          length: {},
          presence: false,
          datetime: {
            latest: "",
            earliest: "",
          },
        },
      },
      Name: {
        type: "string",
        constraints: {
          type: "string",
          length: {
            maximum: "",
          },
          presence: false,
        },
        fieldName: "Guest",
        name: "Name",
      },
      Episode: {
        name: "Episode",
        type: "link",
        tableId: "ta_d4bf541ce0d84b16a1a8e0a060e5f7f7",
        fieldName: "Guest",
        relationshipType: "one-to-many",
      },
    },
    primaryDisplay: "Name",
    indexes: [],
    _id: "ta_3c78cffe33664ca9bfb6b2b6cb3ee55a",
    _rev: "10-27f034bf50ec3e2f180d8f96db1f0f31",
  },
  {
    type: "table",
    views: {},
    name: "Sponsors",
    schema: {
      "Auto ID": {
        name: "Auto ID",
        type: "number",
        subtype: "autoID",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "number",
          presence: false,
          numericality: {
            greaterThanOrEqualTo: "",
            lessThanOrEqualTo: "",
          },
        },
        lastID: 1,
      },
      "Created By": {
        name: "Created By",
        type: "link",
        subtype: "createdBy",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "array",
          presence: false,
        },
        tableId: "ta_users",
        fieldName: "Sponsors-Created By",
        relationshipType: "many-to-many",
      },
      "Created At": {
        name: "Created At",
        type: "datetime",
        subtype: "createdAt",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "string",
          length: {},
          presence: false,
          datetime: {
            latest: "",
            earliest: "",
          },
        },
      },
      "Updated By": {
        name: "Updated By",
        type: "link",
        subtype: "updatedBy",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "array",
          presence: false,
        },
        tableId: "ta_users",
        fieldName: "Sponsors-Updated By",
        relationshipType: "many-to-many",
      },
      "Updated At": {
        name: "Updated At",
        type: "datetime",
        subtype: "updatedAt",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "string",
          length: {},
          presence: false,
          datetime: {
            latest: "",
            earliest: "",
          },
        },
      },
      Name: {
        type: "string",
        constraints: {
          type: "string",
          length: {
            maximum: "",
          },
          presence: false,
        },
        fieldName: "Sponsors",
        name: "Name",
      },
      Spot: {
        type: "longform",
        constraints: {
          type: "string",
          length: {},
          presence: false,
        },
        fieldName: "Sponsors",
        name: "Spot",
      },
      Episode: {
        name: "Episode",
        type: "link",
        tableId: "ta_d4bf541ce0d84b16a1a8e0a060e5f7f7",
        fieldName: "Sponsors",
        relationshipType: "many-to-many",
      },
    },
    primaryDisplay: "Name",
    indexes: [],
    _id: "ta_7fd0fa15edd54e0f91a47f50b7577281",
    _rev: "7-de89b81e21ae4b3f65a6b655144fe097",
  },
  {
    type: "table",
    views: {},
    name: "Episode",
    schema: {
      "Auto ID": {
        name: "Auto ID",
        type: "number",
        subtype: "autoID",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "number",
          presence: false,
          numericality: {
            greaterThanOrEqualTo: "",
            lessThanOrEqualTo: "",
          },
        },
        lastID: 1,
      },
      "Created By": {
        name: "Created By",
        type: "link",
        subtype: "createdBy",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "array",
          presence: false,
        },
        tableId: "ta_users",
        fieldName: "Episode-Created By",
        relationshipType: "many-to-many",
      },
      "Created At": {
        name: "Created At",
        type: "datetime",
        subtype: "createdAt",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "string",
          length: {},
          presence: false,
          datetime: {
            latest: "",
            earliest: "",
          },
        },
      },
      "Updated By": {
        name: "Updated By",
        type: "link",
        subtype: "updatedBy",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "array",
          presence: false,
        },
        tableId: "ta_users",
        fieldName: "Episode-Updated By",
        relationshipType: "many-to-many",
      },
      "Updated At": {
        name: "Updated At",
        type: "datetime",
        subtype: "updatedAt",
        icon: "ri-magic-line",
        autocolumn: true,
        constraints: {
          type: "string",
          length: {},
          presence: false,
          datetime: {
            latest: "",
            earliest: "",
          },
        },
      },
      Summary: {
        type: "longform",
        constraints: {
          type: "string",
          length: {},
          presence: false,
        },
        fieldName: "Episode",
        name: "Summary",
      },
      Author: {
        type: "string",
        constraints: {
          type: "string",
          length: {
            maximum: "",
          },
          presence: false,
        },
        fieldName: "Episode",
        name: "Author",
      },
      Published: {
        type: "boolean",
        constraints: {
          type: "boolean",
          presence: false,
        },
        fieldName: "Episode",
        name: "Published",
      },
      Guest: {
        type: "link",
        constraints: {
          type: "array",
          presence: false,
        },
        fieldName: "Episode",
        name: "Guest",
        relationshipType: "many-to-one",
        tableId: "ta_3c78cffe33664ca9bfb6b2b6cb3ee55a",
      },
      Title: {
        type: "string",
        constraints: {
          type: "string",
          length: {
            maximum: "",
          },
          presence: false,
        },
        fieldName: "Episode",
        name: "Title",
      },
      "Show Notes": {
        type: "longform",
        constraints: {
          type: "string",
          length: {},
          presence: false,
        },
        fieldName: "Episode",
        name: "Show Notes",
      },
      Sponsors: {
        type: "link",
        constraints: {
          type: "array",
          presence: false,
        },
        fieldName: "Episode",
        name: "Sponsors",
        relationshipType: "many-to-many",
        tableId: "ta_7fd0fa15edd54e0f91a47f50b7577281",
      },
      Number: {
        type: "number",
        constraints: {
          type: "number",
          presence: false,
          numericality: {
            greaterThanOrEqualTo: "",
            lessThanOrEqualTo: "",
          },
        },
        fieldName: "Episode",
        name: "Number",
      },
      Audio: {
        type: "attachment",
        constraints: {
          type: "array",
          presence: false,
        },
        fieldName: "Episode",
        name: "Audio",
      },
    },
    indexes: [],
    primaryDisplay: "Author",
    _id: "ta_d4bf541ce0d84b16a1a8e0a060e5f7f7",
    _rev: "13-9d70dee825154a9df5c22e1d39bf269c",
  },
  {
    type: "table",
    views: {},
    name: "Users",
    schema: {
      email: {
        type: "string",
        constraints: {
          type: "string",
          email: true,
          length: {
            maximum: "",
          },
          presence: true,
        },
        fieldName: "email",
        name: "email",
      },
      roleId: {
        fieldName: "roleId",
        name: "roleId",
        type: "options",
        constraints: {
          type: "string",
          presence: false,
          inclusion: ["ADMIN", "POWER", "BASIC", "PUBLIC", "BUILDER"],
        },
      },
      status: {
        fieldName: "status",
        name: "status",
        type: "options",
        constraints: {
          type: "string",
          presence: false,
          inclusion: ["active", "inactive"],
        },
      },
      "Episode-Created By": {
        name: "Episode-Created By",
        type: "link",
        tableId: "ta_d4bf541ce0d84b16a1a8e0a060e5f7f7",
        fieldName: "Created By",
        relationshipType: "many-to-many",
        autocolumn: true,
      },
      "Episode-Updated By": {
        name: "Episode-Updated By",
        type: "link",
        tableId: "ta_d4bf541ce0d84b16a1a8e0a060e5f7f7",
        fieldName: "Updated By",
        relationshipType: "many-to-many",
        autocolumn: true,
      },
      "Guest-Created By": {
        name: "Guest-Created By",
        type: "link",
        tableId: "ta_3c78cffe33664ca9bfb6b2b6cb3ee55a",
        fieldName: "Created By",
        relationshipType: "many-to-many",
        autocolumn: true,
      },
      "Guest-Updated By": {
        name: "Guest-Updated By",
        type: "link",
        tableId: "ta_3c78cffe33664ca9bfb6b2b6cb3ee55a",
        fieldName: "Updated By",
        relationshipType: "many-to-many",
        autocolumn: true,
      },
      "Sponsors-Created By": {
        name: "Sponsors-Created By",
        type: "link",
        tableId: "ta_7fd0fa15edd54e0f91a47f50b7577281",
        fieldName: "Created By",
        relationshipType: "many-to-many",
        autocolumn: true,
      },
      "Sponsors-Updated By": {
        name: "Sponsors-Updated By",
        type: "link",
        tableId: "ta_7fd0fa15edd54e0f91a47f50b7577281",
        fieldName: "Updated By",
        relationshipType: "many-to-many",
        autocolumn: true,
      },
    },
    primaryDisplay: "email",
    _id: "ta_users",
    _rev: "67-1833e6a0028c100633e31788fe958a62",
  },
]

export const SAVE_TABLES_RESPONSE = {
  type: "table",
  _id: "ta_3c78cffe33664ca9bfb6b2b6cb3ee55a",
  views: {},
  name: "Guest",
  schema: {
    "Auto ID": {
      name: "Auto ID",
      type: "number",
      subtype: "autoID",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "number",
        presence: false,
        numericality: {
          greaterThanOrEqualTo: "",
          lessThanOrEqualTo: "",
        },
      },
      lastID: 1,
    },
    "Created By": {
      name: "Created By",
      type: "link",
      subtype: "createdBy",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "array",
        presence: false,
      },
      tableId: "ta_users",
      fieldName: "Guest-Created By",
      relationshipType: "many-to-many",
    },
    "Created At": {
      name: "Created At",
      type: "datetime",
      subtype: "createdAt",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "string",
        length: {},
        presence: false,
        datetime: {
          latest: "",
          earliest: "",
        },
      },
    },
    "Updated By": {
      name: "Updated By",
      type: "link",
      subtype: "updatedBy",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "array",
        presence: false,
      },
      tableId: "ta_users",
      fieldName: "Guest-Updated By",
      relationshipType: "many-to-many",
    },
    "Updated At": {
      name: "Updated At",
      type: "datetime",
      subtype: "updatedAt",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "string",
        length: {},
        presence: false,
        datetime: {
          latest: "",
          earliest: "",
        },
      },
    },
    Episode: {
      name: "Episode",
      type: "link",
      tableId: "ta_d4bf541ce0d84b16a1a8e0a060e5f7f7",
      fieldName: "Guest",
      relationshipType: "one-to-many",
    },
    Names: {
      type: "string",
      constraints: {
        type: "string",
        length: {
          maximum: "",
        },
        presence: false,
      },
      fieldName: "Guest",
      name: "Names",
    },
  },
  primaryDisplay: "Names",
  indexes: [],
  _rev: "11-7c153edbc6d7c43821cfd5ed526266cf",
}

export const A_TABLE = {
  type: "table",
  views: {},
  name: "Guest",
  schema: {
    "Auto ID": {
      name: "Auto ID",
      type: "number",
      subtype: "autoID",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "number",
        presence: false,
        numericality: {
          greaterThanOrEqualTo: "",
          lessThanOrEqualTo: "",
        },
      },
      lastID: 1,
    },
    "Created By": {
      name: "Created By",
      type: "link",
      subtype: "createdBy",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "array",
        presence: false,
      },
      tableId: "ta_users",
      fieldName: "Guest-Created By",
      relationshipType: "many-to-many",
    },
    "Created At": {
      name: "Created At",
      type: "datetime",
      subtype: "createdAt",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "string",
        length: {},
        presence: false,
        datetime: {
          latest: "",
          earliest: "",
        },
      },
    },
    "Updated By": {
      name: "Updated By",
      type: "link",
      subtype: "updatedBy",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "array",
        presence: false,
      },
      tableId: "ta_users",
      fieldName: "Guest-Updated By",
      relationshipType: "many-to-many",
    },
    "Updated At": {
      name: "Updated At",
      type: "datetime",
      subtype: "updatedAt",
      icon: "ri-magic-line",
      autocolumn: true,
      constraints: {
        type: "string",
        length: {},
        presence: false,
        datetime: {
          latest: "",
          earliest: "",
        },
      },
    },
    Episode: {
      name: "Episode",
      type: "link",
      tableId: "ta_d4bf541ce0d84b16a1a8e0a060e5f7f7",
      fieldName: "Guest",
      relationshipType: "one-to-many",
    },
    Names: {
      type: "string",
      constraints: {
        type: "string",
        length: {
          maximum: "",
        },
        presence: false,
      },
      fieldName: "Guest",
      name: "Names",
    },
  },
  primaryDisplay: "Names",
  indexes: [],
  _id: "ta_3c78cffe33664ca9bfb6b2b6cb3ee55a",
  _rev: "10-27f034bf50ec3e2f180d8f96db1f0f31",
  _rename: {
    old: "Name",
    updated: "Names",
  },
}
