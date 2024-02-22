<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Leaflet HTML Legend</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
    <link rel="stylesheet" href="dist/L.Control.HtmlLegend.css" />

    <style>
        @font-face {
            font-family: 'icon';
            src: url(data:font/ttf;base64,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);
            font-weight: normal;
            font-style: normal;
        }

        [class^="icon-"], [class*=" icon-"] {
            font-family: 'icon' !important;
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;

            /* Better Font Rendering =========== */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .icon-eye-slash:before {
            content: "\e903";
        }

        .icon-eye:before {
            content: "\e904";
        }

        .hexagon {
            position: relative;
            width: 13px;
            height: 7.51px;
            background-color: #64C7CC;
            margin: 3.75px 0;
        }

        .hexagon:before,
        .hexagon:after {
            content: "";
            position: absolute;
            width: 0;
            border-left: 6.5px solid transparent;
            border-right: 6.5px solid transparent;
        }

        .hexagon:before {
            bottom: 100%;
            border-bottom: 3.75px solid #64C7CC;
        }

        .hexagon:after {
            top: 100%;
            width: 0;
            border-top: 3.75px solid #64C7CC;
        }
    </style>
</head>
<body>
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
<script src="dist/L.Control.HtmlLegend.js"></script>
<div id="map" style="position: absolute; top: 0; left:0; bottom:0; right: 0;"></div>

<div id="Pentagon" style="display: none">
    <svg viewBox="0 0 12.071004 11.879879"
         height="3.3527658mm"
         width="3.4067056mm">
        <g transform="translate(-178.44332,-260.41101)">
            <path d="m 179.93895,268.87298 c -0.81429,-1.87985 -1.48727,-3.43568 -1.49552,-3.4574 -0.0109,-0.0288 0.74744,-0.71211 2.8028,-2.52538 1.54978,-1.36724 2.82584,-2.48287 2.83568,-2.47918 0.0352,0.0132 6.38478,3.76865 6.42481,3.79994 0.037,0.0289 -0.0368,0.37955 -0.77648,3.69055 -0.44954,2.01224 -0.82089,3.66216 -0.82522,3.6665 -0.004,0.004 -1.63277,0.16196 -3.61875,0.35028 -1.98598,0.18831 -3.66845,0.34919 -3.73883,0.3575 l -0.12797,0.0151 -1.48052,-3.41791 z"
                  style="fill:#ffa500;fill-opacity:1"></path>
        </g>
    </svg>

</div>

<script>
   

</script>
</body>
</html>