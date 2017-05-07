$(document).ready(() => {

  let vegaJSONSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.0.json",
    "width": 700,
    "height": 400,
    "padding": 5,

    "config": {
      "axisY": {
        "titleX": -2,
        "titleY": 410,
        "titleAngle": 0,
        "titleAlign": "right",
        "titleBaseline": "top"
      }
    },

    "data": [
      {
        "name": "voters",
        "url": "data/json/voter_profile.json"
      },
      {
        "name": "fields",
        "values": [
          "NUM_ZONA",
          "NUM_SECAO",
          "COD_ESTADO_CIVIL",
          "COD_FAIXA_ETARIA",
          "COD_GRAU_ESCOLARIDADE",
          "COD_SEXO"
        ]
      }
    ],

    "scales": [
      {
        "name": "ord", "type": "point",
        "range": "width", "round": true,
        "domain": {"data": "fields", "field": "data"}
      },
      {
        "name": "NUM_ZONA", "type": "linear",
        "range": "height", "zero": false, "nice": true,
        "domain": {"data": "voters", "field": "NUM_ZONA"}
      },
      {
        "name": "NUM_SECAO", "type": "linear",
        "range": "height", "zero": false, "nice": true,
        "domain": {"data": "voters", "field": "NUM_SECAO"}
      },
      {
        "name": "COD_ESTADO_CIVIL", "type": "linear",
        "range": "height", "zero": false, "nice": true,
        "domain": {"data": "voters", "field": "COD_ESTADO_CIVIL"}
      },
      {
        "name": "COD_FAIXA_ETARIA", "type": "linear",
        "range": "height", "zero": false, "nice": true,
        "domain": {"data": "voters", "field": "COD_FAIXA_ETARIA"}
      },
      {
        "name": "COD_GRAU_ESCOLARIDADE", "type": "linear",
        "range": "height", "zero": false, "nice": true,
        "domain": {"data": "voters", "field": "COD_GRAU_ESCOLARIDADE"}
      },
      {
        "name": "COD_SEXO", "type": "linear",
        "range": "height", "zero": false, "nice": true,
        "domain": {"data": "voters", "field": "COD_SEXO"}
      }
    ],

    "axes": [
      {
        "orient": "left", "zindex": 1,
        "scale": "NUM_ZONA", "title": "Zona",
        "offset": {"scale": "ord", "value": "NUM_ZONA", "mult": -1}
      },
      {
        "orient": "left", "zindex": 1,
        "scale": "NUM_SECAO", "title": "Secao",
        "offset": {"scale": "ord", "value": "NUM_SECAO", "mult": -1}
      },
      {
        "orient": "left", "zindex": 1,
        "scale": "COD_ESTADO_CIVIL", "title": "Estado Civil",
        "offset": {"scale": "ord", "value": "COD_ESTADO_CIVIL", "mult": -1}
      },
      {
        "orient": "left", "zindex": 1,
        "scale": "COD_FAIXA_ETARIA", "title": "Faixa Etaria",
        "offset": {"scale": "ord", "value": "COD_FAIXA_ETARIA", "mult": -1}
      },
      {
        "orient": "left", "zindex": 1,
        "scale": "COD_GRAU_ESCOLARIDADE", "title": "Grau Esc.",
        "offset": {"scale": "ord", "value": "COD_GRAU_ESCOLARIDADE", "mult": -1}
      },
      {
        "orient": "left", "zindex": 1,
        "scale": "COD_SEXO", "title": "Sexo",
        "offset": {"scale": "ord", "value": "COD_SEXO", "mult": -1}
      }
    ],

    "marks": [
      {
        "type": "group",
        "from": {"data": "voters"},
        "marks": [
          {
            "type": "line",
            "from": {"data": "fields"},
            "encode": {
              "enter": {
                "x": {"scale": "ord", "field": "data"},
                "y": {
                  "scale": {"datum": "data"},
                  "field": {"parent": {"datum": "data"}}
                },
                "stroke": {"value": "steelblue"},
                "strokeWidth": {"value": 1.01},
                "strokeOpacity": {"value": 0.3}
              }
            }
          }
        ]
      }
    ]
  }

  const view = new vega.View(vega.parse(vegaJSONSpec))
      .renderer('svg')                             // set renderer (canvas or svg)
      .initialize(document.querySelector('#view')) // initialize view within parent DOM container
      .hover()                                     // enable hover encode set processing
      .run();                                      // run the dataflow and render the view
})
