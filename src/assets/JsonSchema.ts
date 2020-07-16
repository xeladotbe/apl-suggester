/*
 *   Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

/* tslint:disable */
'use strict'
import { IJsonSchema } from './IJsonSchema';
export const JSON_SCHEMA : IJsonSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "UserDefinedCommand": {
      "properties": {
        "parameters": {
          "$ref": "#/definitions/CommandParameterArray",
          "description": "Optional named parameters to add to the data-binding context."
        },
        "commands": {
          "oneOf": [
            {
              "$ref": "#/definitions/Command"
            },
            {
              "$ref": "#/definitions/CommandArray"
            },
            {
              "type": "string"
            }
          ]
        },
        "command": {
          "oneOf": [
            {
              "$ref": "#/definitions/Command"
            },
            {
              "$ref": "#/definitions/CommandArray"
            },
            {
              "type": "string"
            }
          ]
        },
        "description": {
          "type": "string",
          "description": "Description of this command."
        }
      },
      "additionalProperties": false,
      "oneOf": [
        {
          "required": [
            "command"
          ]
        },
        {
          "required": [
            "commands"
          ]
        }
      ]
    },
    "CommandParameterArray": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "$ref": "#/definitions/CommandParameter"
          }
        ]
      }
    },
    "CommandParameter": {
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the parameter"
        },
        "description": {
          "type": "string",
          "description": "An optional description of this parameter and the purpose it serves."
        },
        "type": {
          "type": "string",
          "description": "The type of the parameter.",
          "enum": [
            "any",
            "array",
            "boolean",
            "color",
            "dimension",
            "integer",
            "map",
            "number",
            "object",
            "string"
          ]
        },
        "default": {
          "$ref": "#/definitions/any",
          "description": "Default value to assign if not provided."
        }
      },
      "additionalProperties": true,
      "required": [
        "name"
      ]
    },
    "CommandArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Command"
      }
    },
    "Command": {
      "properties": {
        "type": {
          "type": "string",
          "description": "The type of the command."
        }
      },
      "additionalProperties": true,
      "required": [
        "type"
      ],
      "type": "object"
    },
    "Graphic": {
      "properties": {
        "description": {
          "type": "string",
          "description": "Optional description of this vector graphic."
        },
        "height": {
          "$ref": "#/definitions/dimension",
          "description": "The height of the graphic."
        },
        "item": {
          "$ref": "#/definitions/GraphicItems"
        },
        "items": {
          "$ref": "#/definitions/GraphicItems"
        },
        "resources": {
          "$ref": "#/definitions/GraphicResourcesBlockArray",
          "description": "Local graphic-specific resources"
        },
        "styles": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/GraphicStyles"
            }
          },
          "description": "Local graphic-specific styles"
        },
        "parameters": {
          "$ref": "#/definitions/GraphicParameterArray",
          "description": "An array of parameter values that can be set on the AVG object."
        },
        "scaleTypeHeight": {
          "$ref": "#/definitions/ScaleType",
          "description": "How the viewport height changes as the height scales."
        },
        "scaleTypeWidth": {
          "$ref": "#/definitions/ScaleType",
          "description": "How the viewport width changes as the width scales."
        },
        "type": {
          "type": "string",
          "description": "The type of vector graphic.",
          "enum": [
            "AVG"
          ]
        },
        "version": {
          "type": "string",
          "description": "The current release version of the AVG standard.",
          "enum": [
            "1.0"
          ]
        },
        "viewportHeight": {
          "type": "number",
          "description": "	The height of the viewport."
        },
        "viewportWidth": {
          "type": "number",
          "description": "	The width of the viewport."
        },
        "width": {
          "$ref": "#/definitions/dimension",
          "description": "The width of the graphic."
        },
      },
      "required": [
        "height",
        "type",
        "version",
        "width"
      ],
      "additionalProperties": false
    },
    "GraphicParameterArray": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "$ref": "#/definitions/GraphicParameter"
          }
        ]
      }
    },
    "GraphicParameter": {
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the parameter"
        },
        "description": {
          "type": "string",
          "description": "An optional description of this parameter and the purpose it serves."
        },
        "type": {
          "type": "string",
          "description": "The type of the parameter.",
          "enum": [
            "any",
            "color",
            "number",
            "string"
          ]
        },
        "default": {
          "$ref": "#/definitions/any",
          "description": "Default value to assign if not provided."
        }
      },
      "additionalProperties": true,
      "required": [
        "name"
      ]
    },
    "GraphicResourcesBlockArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/GraphicResourcesBlock"
      }
    },
    "GraphicResourcesBlock": {
      "properties": {
        "booleans": {
          "patternProperties": {
            "^.*$": {
              "type": "boolean"
            }
          },
          "description": "A mapping from boolean name to boolean value"
        },
        "boolean": {
          "patternProperties": {
            "^.*$": {
              "type": "boolean"
            }
          },
          "description": "A mapping from boolean name to boolean value"
        },
        "colors": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/color"
            }
          },
          "description": "A mapping from color name to color value"
        },
        "color": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/color"
            }
          },
          "description": "A mapping from color name to color value"
        },
        "description": {
          "type": "string",
          "description": "A description of this resource block."
        },
        "easings": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/Easing"
            }
          },
          "description": "Map from easing name to easing definition"
        },
        "easing": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/Easing"
            }
          },
          "description": "Map from easing name to easing definition"
        },
        "gradients": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/AVGGradient"
            }
          },
          "description": "Map from gradient name to gradient definition"
        },
        "gradient": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/AVGGradient"
            }
          },
          "description": "Map from gradient name to gradient definition"
        },
        "numbers": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/number"
            }
          },
          "description": "A mapping from a name to a number"
        },
        "number": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/number"
            }
          },
          "description": "A mapping from a name to a number"
        },
        "patterns": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/AVGPattern"
            }
          },
          "description": "A mapping from name to a pattern"
        },
        "pattern": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/AVGPattern"
            }
          },
          "description": "A mapping from name to a pattern"
        },
        "strings": {
          "patternProperties": {
            "^.*$": {
              "type": "string"
            }
          },
          "description": "A mapping from a name to a string"
        },
        "string": {
          "patternProperties": {
            "^.*$": {
              "type": "string"
            }
          },
          "description": "A mapping from a name to a string"
        },
        "when": {
          "type": "boolean",
          "description": "If true, this resource block will be included. Defaults to true"
        },
      }
    },
    "GraphicStyles": {
      "properties": {
        "description": {
          "type": "string",
          "description": "A description of this style"
        },
        "extend": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/stringArray"
            }
          ]
        },
        "extends": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/stringArray"
            }
          ]
        },
        "values": {
          "type": "array",
          "items": {
              "$ref": "#/definitions/Value"
          }
        },
        "value": {
          "type": "array",
          "items": {
              "$ref": "#/definitions/Value"
          }
        }
      },
      "additionalProperties": false
    },
    "ScaleType": {
      "type": "string",
      "enum": [
        "none",
        "grow",
        "shrink",
        "stretch"
      ]
    },
    "GraphicItems": {
      "oneOf": [
        {
          "type": "string"
        },
        {
          "$ref": "#/definitions/AVGItem"
        },
        {
          "$ref": "#/definitions/AVGItemArray"
        }
      ]
    },
    "AVGItemArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/AVGItem"
      }
    },
    "AVGItem": {
      "properties": {
        "type": {
          "type": "string",
          "description": "Indicates this item is a path.",
          "enum": [
            "path",
            "group",
            "text"
          ]
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": true,
      "type": "object"
    },
    "Setting": {
      "$ref": "#/definitions/any"
    },
    "ImportArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Import"
      }
    },
    "Import": {
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of the package"
        },
        "version": {
          "type": "string",
          "description": "The semantic version of the package that will be loaded"
        },
        "source": {
          "type": "string",
          "description": "A downloadable URL containing the contents of the package"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "version"
      ]
    },
    "Layout": {
      "properties": {
        "parameters": {
          "$ref": "#/definitions/LayoutParameterArray",
          "description": "Named parameters that can be passed to this layout from another layout."
        },
        "items": {
          "oneOf": [
            {
              "$ref": "#/definitions/Component"
            },
            {
              "$ref": "#/definitions/ComponentArray"
            },
            {
              "type": "string"
            }
          ]
        },
        "item": {
          "oneOf": [
            {
              "$ref": "#/definitions/Component"
            },
            {
              "$ref": "#/definitions/ComponentArray"
            },
            {
              "type": "string"
            }
          ]
        },
        "description": {
          "type": "string",
          "description": "An optional description of this layout and the purpose it serves."
        }
      },
      "additionalProperties": true,
      "oneOf": [
        {
          "required": [
            "item"
          ]
        },
        {
          "required": [
            "items"
          ]
        }
      ]
    },
    "LayoutParameterArray": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "$ref": "#/definitions/LayoutParameter"
          }
        ]
      }
    },
    "LayoutParameter": {
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the parameter"
        },
        "description": {
          "type": "string",
          "description": "An optional description of this parameter and the purpose it serves."
        },
        "type": {
          "type": "string",
          "description": "The type of the parameter.",
          "enum": [
            "any",
            "array",
            "string",
            "number",
            "integer",
            "color",
            "boolean",
            "dimension",
            "component",
            "map",
            "object"
          ]
        },
        "default": {
          "$ref": "#/definitions/any",
          "description": "Default value to assign if not provided."
        }
      },
      "additionalProperties": true,
      "required": [
        "name"
      ]
    },
    "any": {
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "number"
        },
        {
          "type": "boolean"
        },
        {
          "type": "object"
        }
      ]
    },
    "tickHandler": {
      "properties": {
        "commands": {
          "type": "array",
          "description": "Handlers to check on tick events.",
          "items": {
            "$ref": "#/definitions/Command"
          }
        },
        "description": {
          "type": "string",
          "description": "Optional description of this tick handler.",
          "default": ""
        },
        "minimumDelay": {
          "type": "number",
          "description": "Minimum duration in milliseconds that must pass before this handler is invoked again.",
          "default": 1000
        },
        "when": {
          "type": "boolean",
          "description": "If true, invoke this handler.",
          "default": true
        }
      },
      "required": [
          "commands"
      ]
    },
    "tickHandlerArray": {
      "type": "array",
      "description": "An array of Tick Event Handlers to execute as time passes.",
      "items": {
        "$ref": "#/definitions/tickHandler"
      }
    },
    "ComponentArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Component"
      }
    },
    "Component": {
      "properties": {
        "type": {
          "type": "string",
          "description": "The type of this component. Used to select an appropriate child type for inflation"
        }
      },
      "additionalProperties": true,
      "required": [
        "type"
      ],
      "type": "object"
    },
    "ResourceBlockArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ResourceBlock"
      }
    },
    "ResourceBlock": {
      "properties": {
        "description": {
          "type": "string",
          "description": "Description of this resource block"
        },
        "when": {
          "type": "boolean",
          "description": "Conditional definition.  If true, this resource block will be inflated"
        },
        "colors": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/color"
            }
          },
          "description": "Map of color name to value"
        },
        "dimensions": {
          "patternProperties": {
            "^.*$": {
              "$ref": "#/definitions/dimension"
            }
          },
          "description": "Map of dimension name to value"
        },
        "numbers": {
          "patternProperties": {
            "^.*$": {
              "type": "number"
            }
          },
          "description": "Map of names to numbers"
        },
        "booleans": {
          "patternProperties": {
            "^.*$": {
              "type": "boolean"
            }
          },
          "description": "Map of names to booleans"
        },
        "strings": {
          "patternProperties": {
            "^.*$": {
              "type": "string"
            }
          },
          "description": "Map of names to strings"
        }
      },
      "additionalProperties": false
    },
    "color": {
      "type": "string"
    },
    "Value": {
      "properties": {
        "when": {
          "type": "boolean",
          "description": "If true, this resource block will be included. Defaults to true"
        },
      },
      "additionalProperties": true,
    },
    "Easing": {
      "type": "string"
    },
    "AVGGradient": {
      "oneOf": [
          {
              "$ref": "#/definitions/AVGLinearGradient"
          },
          {
              "$ref": "#/definitions/AVGRadialGradient"
          }
      ]
    },
    "AVGLinearGradient": {
        "type": "object",
        "properties": {
            "type": {
                "type": "string",
                "description": "Defines the gradient type",
                "enum": [
                    "linear"
                ]
            },
            "colorRange": {
                "$ref": "#/definitions/ColorArray",
                "description": "The color to assign at each gradient stop."
            },
            "description": {
                "type": "string",
                "description": "Optional description of this gradient"
            },
            "inputRange": {
                "type": "array",
                "items": {
                    "type": "number"
                },
                "description": "The input stops of the gradient."
            },
            "units": {
                "type": "string",
                "description": "The coordinate system for positioning",
                "enum": [
                    "userSpace",
                    "boundingBox"
                ]
            },
            "spreadMethod": {
                "type": "string",
                "description": "Gradient behavior outside of the defined range",
                "enum": [
                    "pad",
                    "reflect",
                    "repeat"
                ]
            },
            "x1": {
                "type": "number",
                "description": "Gradient behavior outside of the defined range"
            },
            "x2": {
                "type": "number",
                "description": "Gradient behavior outside of the defined range"
            },
            "y1": {
                "type": "number",
                "description": "Gradient behavior outside of the defined range"
            },
            "y2": {
                "type": "number",
                "description": "Gradient behavior outside of the defined range"
            }
        },
        "required": [
            "type",
            "colorRange"
        ],
        "additionalProperties": false
    },
    "AVGRadialGradient": {
        "type": "object",
        "properties": {
            "type": {
                "type": "string",
                "description": "Defines the gradient type",
                "enum": [
                    "radial"
                ]
            },
            "colorRange": {
                "$ref": "#/definitions/ColorArray",
                "description": "The color to assign at each gradient stop."
            },
            "description": {
                "type": "string",
                "description": "Optional description of this gradient"
            },
            "inputRange": {
                "type": "array",
                "items": {
                    "type": "number"
                },
                "description": "The input stops of the gradient."
            },
            "units": {
                "type": "string",
                "description": "The coordinate system for positioning",
                "enum": [
                    "userSpace",
                    "boundingBox"
                ]
            },
            "centerX": {
                "type": "number",
                "description": "The x-position of the center of the gradient"
            },
            "centerY": {
                "type": "number",
                "description": "The y-position of the center of the gradient"
            },
            "radius": {
                "type": "number",
                "exclusiveMinimum" : 0,
                "description": "The radius of the gradient (distance to end)"
            }
        },
          "required": [
              "type",
              "colorRange"
          ],
          "additionalProperties": false
    },
    "AVGPattern": {
      "type": "object",
      "properties": {
          "description": {
              "type": "string",
              "description": "Optional description of this pattern."
          },
          "height": {
              "type": "number",
              "description": "height"
          },
          "width": {
              "type": "number",
              "description": "Width of the pattern"
          },
          "item": {
              "$ref": "#/definitions/AVGItemArray",
              "description": "An array of drawing items"
          },
          "items": {
              "$ref": "#/definitions/AVGItemArray",
              "description": "An array of drawing items"
          }
      },
      "required": [
          "height",
          "width"
      ],
      "additionalProperties": false
    },
    "dimension": {
      "oneOf": [
        {
          "type": "string",
          "pattern": "^(auto)$|^[+]?[0-9]\\d*(\\.\\d+)?(px|vh|%|dp|vw)?$"
        },
        {
          "type": "number"
        }
      ]
    },
    "Style": {
      "properties": {
        "description": {
          "type": "string",
          "description": "A description of this style"
        },
        "extend": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/stringArray"
            }
          ]
        },
        "values": {
          "anyOf": [
            {
              "$ref": "#/definitions/StyleBlock"
            },
            {
              "$ref": "#/definitions/StyleBlockArray"
            },
            {
              "type": "string"
            }
          ]
        }
      },
      "additionalProperties": false
    },
    "stringArray": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "StyleBlockArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/StyleBlock"
      }
    },
    "StyleBlock": {
      "patternProperties": {
        "when": {
          "type": "boolean",
          "description": "When true, include this in the style"
        },
        "^.*$": {
          "$ref": "#/definitions/any",
          "description": "Any other style property"
        }
      }
    },
    "TestCaseArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/TestCase"
      }
    },
    "TestCase": {
      "properties": {
        "label": {
          "type": "string",
          "description": "Human-readable label for the test case"
        },
        "command": {
          "$ref": "#/definitions/CommandArray",
          "description": "Command or set of commands to exeucte"
        }
      },
      "additionalProperties": false,
      "required": [
        "label",
        "command"
      ]
    },
    "ColorArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/color"
      }
    },
    "dimensions": {
      "patternProperties": {
        "^.*$": {
          "$ref": "#/definitions/dimension"
        }
      }
    },
    "anyArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/any"
      }
    },
    "number": {
      "type": "number"
    },
    "numberArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/number"
      }
    },
    "Binding": {
      "properties": {
        "name": {
          "type": "string",
          "description": "The name to add to data-binding"
        },
        "value": {
          "type": "string",
          "description": "The value to add to data-binding. May be a data-bound expression"
        },
        "type": {
          "type": "string",
          "description": "The type of value to add to data-binding.",
          "enum": [
            "any",
            "string",
            "number",
            "integer",
            "style",
            "color",
            "boolean",
            "dimension",
            "component",
            "componentArray"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "value"
      ]
    },
    "BindingArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Binding"
      }
    },
    "Entity": {
      "properties": {
        "id": {
          "type": "string",
          "description": "The id of this entity"
        },
        "type": {
          "type": "string",
          "description": "The type of this entity"
        },
        "name": {
          "type": "string",
          "description": "The name of this entity"
        },
        "nameSynonyms": {
          "$ref": "#/definitions/stringArray",
          "description": "Array of synonyms of this entity"
        },
        "targetSlotName": {
          "type": "string",
          "description": "The target slot name of this entity"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "type",
        "name"
      ]
    },
    "EntityArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Entity"
      }
    },
    "FilterBlur": {
      "properties": {
        "type": {
          "type": "string",
          "description": "The type of filter to apply"
        },
        "radius": {
          "$ref": "#/definitions/dimension"
        }
      },
      "additionalProperties": false,
      "required": [
        "type",
        "radius"
      ]
    },
    "FilterNoise": {
      "properties": {
        "type": {
          "type": "string",
          "description": "The type of filter to apply"
        },
        "kind": {
          "type": "string",
          "description": "The probability distribution used to generate the noise."
        },
        "useColor": {
          "type": "boolean",
          "description": "If true, colored noise will be used. If false, monochromatic."
        },
        "sigma": {
          "type": "number",
          "description": "Standard deviation of the noise"
        }
      },
      "additionalProperties": false,
      "required": [
        "type"
      ]
    },
    "Filter": {
      "anyOf": [
        {
          "$ref": "#/definitions/FilterBlur"
        },
        {
          "$ref": "#/definitions/FilterNoise"
        }
      ]
    },
    "FilterArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Filter"
      }
    },
    "Gradient": {
      "properties": {
        "angle": {
          "type": "number",
          "description": "Angle of a linear gradient, in degrees. 0 is up, 90 is to the right"
        },
        "colorRange": {
          "$ref": "#/definitions/ColorArray",
          "description": "The color to assign at each gradient step"
        },
        "description": {
          "type": "string",
          "description": "Description of this gradient"
        },
        "inputRange": {
          "$ref": "#/definitions/numberArray",
          "description": "The input stops of the gradient. Must be in ascending order with values between 0 and 1"
        },
        "type": {
          "type": "string",
          "description": "The type of the gradient",
          "enum": [
            "linear",
            "radial"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "colorRange"
      ]
    },
    "videoTrack": {
      "properties": {
        "description": {
          "type": "string",
          "description": "Optional description of this source"
        },
        "duration": {
          "type": "integer",
          "description": "Duration of the track in milliseconds"
        },
        "url": {
          "$ref": "#/definitions/stringArray",
          "description": "The actual URL to load the video from"
        },
        "repeatCount": {
          "type": "integer",
          "description": "Number of times to repeat. -1 is repeat forever"
        },
        "offset": {
          "type": "integer",
          "description": "Milliseconds from the start of the track to play from"
        }
      },
      "additionalProperties": false,
      "required": [
        "url"
      ]
    },
    "ExtensionArray": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Extension"
      }
    },
    "Extension": {
      "properties": {
        "name": {
          "type": "string",
          "description": "The local name/namespace of the extension"
        },
        "uri": {
          "type": "string",
          "description": "The URI of the requested extension"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "uri"
      ]
    }
  },
  "type": "object",
  "properties": {
    "background": {
      "anyOf": [
        {
          "$ref": "#/definitions/color"
        },
        {
          "$ref": "#/definitions/Gradient"
        }
      ],
      "description": "Override standard background color."
    },
    "commands": {
      "patternProperties": {
        "^.*$": {
          "$ref": "#/definitions/UserDefinedCommand"
        }
      },
      "description": "A map of user-defined command."
    },
    "description": {
      "type": "string",
      "description": "An optional description of this document."
    },
    "handleTick": {
      "$ref":"#/definitions/tickHandlerArray",
      "description": "An array of Tick Event Handlers to execute as time passes."
    },
    "graphics": {
      "patternProperties": {
        "^.*$": {
          "$ref": "#/definitions/Graphic"
        }
      },
      "description": "A map of vector graphic."
    },
    "import": {
      "$ref": "#/definitions/ImportArray",
      "description": "A list of references to external packages."
    },
    "mainTemplate": {
      "$ref": "#/definitions/Layout",
      "description": "The main layout to inflate for this document."
    },
    "onMount": {
      "$ref": "#/definitions/CommandArray",
      "description": "A list of commands to execute when the document is first displayed."
    },
    "resources": {
      "$ref": "#/definitions/ResourceBlockArray",
      "description": "A list of one or more resource groups"
    },
    "settings": {
      "patternProperties": {
        "^.*$": {
          "$ref": "#/definitions/Setting"
        }
      },
      "description": "A map of document-wide settings."
    },
    "styles": {
      "patternProperties": {
        "^.*$": {
          "$ref": "#/definitions/Style"
        }
      },
      "description": "A map of style name to style definition"
    },
    "layouts": {
      "patternProperties": {
        "^.*$": {
          "$ref": "#/definitions/Layout"
        }
      },
      "description": "A map of name to layout."
    },
    "type": {
      "type": "string",
      "description": "The document type.",
      "enum": [
        "APL"
      ]
    },
    "version": {
      "type": "string",
      "description": "Version of the specification this document follows.",
      "enum": [
        "1.0",
        "1.1",
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    "tests": {
      "$ref": "#/definitions/TestCaseArray",
      "description": "Internal test cases - not part of the official APML definition"
    },
    "theme": {
      "type": "string",
      "description": "Reflects the basic color scheme in use on the device.",
      "enum": [
        "dark",
        "light"
      ]
    },
    "extensions": {
      "$ref": "#/definitions/ExtensionArray",
      "description": "An optional list of APL extensions requested by the document"
    }
  },
  "additionalProperties": false,
  "required": [
    "mainTemplate",
    "type",
    "version"
  ]
};
