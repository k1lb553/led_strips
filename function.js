var bence = [];
        var colorPicker = new iro.ColorPicker('#picker1', {
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            { 
                component: iro.ui.Wheel,
                options: {}
            },
            ]
        });
        colorPicker.on(['color:init', 'input:end'], function(color) {
        bence[0] = "R1="+color.red+"G1="+color.green+"B1="+color.blue;
        window.location.href="csabiszeretengem.html#"+bence;
        });
        var colorPicker = new iro.ColorPicker('#picker_value_1', {
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            { 
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value',
                    sliderSize: 40,
                }
            },
            ]
        });
        var kelvinPicker = new iro.ColorPicker("#kelvinPicker_1", {
            color: "rgb(255, 0, 0)",
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            {
                component: iro.ui.Slider,
                options: {
                sliderType: 'kelvin',
                sliderSize: 40,
            }
        },
        ]
        });


        var colorPicker = new iro.ColorPicker('#picker2', {
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            { 
                component: iro.ui.Wheel,
                options: {}
            },
            ]
        });
        colorPicker.on(['color:init', 'input:end'], function(color) {
        bence[1] = "R2="+color.red+"G2="+color.green+"B2="+color.blue;
        window.location.href="csabiszeretengem.html#"+bence;
        });
        var colorPicker = new iro.ColorPicker('#picker_value_2', {
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            { 
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value',
                    sliderSize: 40,
                }
            },
            ]
        });
        var kelvinPicker = new iro.ColorPicker("#kelvinPicker_2", {
            color: "rgb(255, 0, 0)",
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            {
                component: iro.ui.Slider,
                options: {
                sliderType: 'kelvin',
                sliderSize: 40,
            }
        },
        ]
        });


        var colorPicker = new iro.ColorPicker('#picker3', {
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            { 
                component: iro.ui.Wheel,
                options: {}
            },
            ]
        });
        colorPicker.on(['color:init', 'input:end'], function(color) {
        bence[2] = "R3="+color.red+"G3="+color.green+"B3="+color.blue;
        window.location.href="csabiszeretengem.html#"+bence;
        });

        var colorPicker = new iro.ColorPicker('#picker_value_3', {
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            { 
                component: iro.ui.Slider,
                options: {
                    sliderType: 'value',
                    sliderSize: 40,
                }
            },
            ]
        });
        var kelvinPicker = new iro.ColorPicker("#kelvinPicker_3", {
            color: "rgb(255, 0, 0)",
            borderWidth: 1,
            borderColor: "#fff",
            layout: [
            {
                component: iro.ui.Slider,
                options: {
                sliderType: 'kelvin',
                sliderSize: 40,
            }
        },
        ]
        });