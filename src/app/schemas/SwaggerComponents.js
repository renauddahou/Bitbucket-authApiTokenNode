exports.components = {
  schemas: {
    Authenticar: {

      type: "object",
      properties: {
        apiKey: {
          type: "string",
        },
      },
      required: ["apiKey"],
    },

    GenericError: {
      type: "object",
      properties: {
        coderror: {
          type: "integer",
          default: 500,
          description: "Status code from response",
        },
        message: {
          type: "string",
          default: "Internal Server Error",
          description: "Status text from response",
        },
        description: {
          type: "string",
          default: "Error desconocido. Favor intente más tarde...",
          description: "Functional description about error",
        },
        link: {
          type: "string",
          default: "/docs",
          description: "Docs uri",
        },
        errors: {
          type: "array",
          default: undefined,
          description: "List of errors (optional)",
          items: {},
        },
      },
      required: ["coderror", "message", "description", "link"],
    },
    Unauthorized: {
      type: "object",
      properties: {
        coderror: {
          type: "integer",
          default: 400,
          description: "Status code from response",
        },
        message: {
          type: "string",
          default: "Unauthorized",
          description: "Status text from response",
        },
        description: {
          type: "string",
          default: "ApiKey not found",
          description: "Functional description about error",
        },
        link: {
          type: "string",
          default: "/docs",
          description: "Docs uri",
        },
      },
      required: ["coderror", "message", "description", "link"],
    },
    Forbidden: {
      type: "object",
      properties: {
        coderror: {
          type: "integer",
          default: 403,
          description: "Status code from response",
        },
        message: {
          type: "string",
          default: "Forbidden",
          description: "Status text from response",
        },
        description: {
          type: "string",
          default: "Acceso denegado. Favor contáctese con el adminitrador.",
          description: "Functional description about error",
        },
        link: {
          type: "string",
          default: "/docs",
          description: "Docs uri",
        },
      },
      required: ["coderror", "message", "description", "link"],
    },
    BadRequest: {
      type: "object",
      properties: {
        coderror: {
          type: "integer",
          default: 400,
          description: "Status code from response",
        },
        message: {
          type: "string",
          default: "Bad Request",
          description: "Status text from response",
        },
        description: {
          type: "string",
          default: "",
          description: "Functional description about error",
        },
        link: {
          type: "string",
          default: "/docs",
          description: "Docs uri",
        },
        errors: {
          type: "array",
          default: undefined,
          description: "List of validation errors",
          items: {},
        },
      },
      required: ["coderror", "message", "description", "link"],
    },
  },
  responses: {
    GenericError: {
      description: "Error genérico de la operación",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/GenericError",
          },
        },
      },
    },
    Unauthorized: {
      description: "Petición no autorizada",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Unauthorized",
          },
        },
      },
    },
    Forbidden: {
      description: "Acceso denegado",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Forbidden",
          },
        },
      },
    },
    BadRequest: {
      description: "Mensaje inválido",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/BadRequest",
          },
        },
      },
    },
  },
  securitySchemes: {
    "Api key origen": {
      type: "apiKey",
      name: "apikey",
      in: "header",
    },
  },
};
