const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const componentSchema = new Schema({
  error: Boolean,
  data: [
    {
      name: String,
      version: String,
      description: String,
      components: [
        {
          datasheet: String,
          tech_specs: [
            {
              value: String,
              key: String
            },
            {
              value: String,
              key: String
            },
            {
              value: String,
              key: String
            }
          ],
          detailled_info: String,
          v_min: Number,
          io: {
            power: [
              {
                wiretype: String,
                label: String,
                type: String
              }
            ],
            gates: [
              {
                type: String,
                type: String,
                type: String,
                type: String,
                wiretype: String,
                sim_gate: [Number],
                label: String,
                type: String
              },
              {
                wiretype: String,
                sim_gate: [Number],
                label: String,
                type: String
              },
              {
                wiretype: String,
                sim_gate: [Number],
                label: String,
                type: String
              },
              {
                wiretype: String,
                sim_gate: [Number],
                label: String,
                type: String
              },
              {
                wiretype: String,
                sim_gate: [Number],
                label: String,
                type: String
              },
              {
                wiretype: String,
                sim_gate: [Number],
                label: String,
                type: String
              }
            ]
          },
          configuration_parameters: [
            {
              default_value: Number,
              information: [],
              description: String,
              range: [Number],
              type: String,
              name: String
            },
            {
              default_value: String,
              information: [],
              description: String,
              range: [String],
              type: Number,
              name: String
            }
          ],
          label: String,
          name: String,
          v_max: Number,
          categorie: String,
          i_min: String,
          icon_text: String,
          power: String,
          states: String,
          i_max: Number,
          version_launch: String,
          uuid: String,
          details: String,
          power_specs: [
            {
              data: [
                {
                  value: Number,
                  key: String
                },
                {
                  value: Number,
                  key: String
                }
              ],
              type: String
            },
            {
              data: [
                {
                  value: Number,
                  key: String
                },
                {
                  value: Number,
                  key: String
                }
              ],
              type: String
            }
          ],
          icon: String,
          type: String,
          vendor: String
        }      
      ]
    }
  ]
});

module.exports = mongoose.model('Component', componentSchema);