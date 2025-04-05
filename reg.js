function reg(){
    let model = null;

      // Load the ONNX model
      async function loadModel() {
        if (!model) {
          // Ensure correct model path
          model = await onnxruntime.InferenceSession.create("regressor.onnx");
        }
        return model;
      }

      // Make prediction with user inputs
      async function makePrediction() {
        // Get the input values
        const year = parseFloat(document.getElementById("year").value);
        const rainfall = parseFloat(document.getElementById("rainfall").value);
        const pesticides = parseFloat(
          document.getElementById("pesticides").value
        );
        const temp = parseFloat(document.getElementById("temp").value);
        const area = document.getElementById("area").value;
        const item = document.getElementById("item").value;

        // Validate inputs
        if (isNaN(year) || year < 1900 || year > 2100) {
          alert("Please enter a valid year.");
          return;
        }
        if (isNaN(rainfall) || rainfall < 0) {
          alert("Please enter a valid rainfall value.");
          return;
        }
        if (isNaN(pesticides) || pesticides < 0) {
          alert("Please enter a valid pesticides value.");
          return;
        }
        if (isNaN(temp)) {
          alert("Please enter a valid temperature.");
          return;
        }

        // Load model
        const session = await loadModel();

        // Encode inputs
        const areaEncoded = encodeArea(area);
        const itemEncoded = encodeItem(item);

        // Prepare input data
        const inputData = new Float32Array([
          year,
          rainfall,
          pesticides,
          temp,
          ...areaEncoded,
          ...itemEncoded,
        ]);

        // Create tensor
        const inputTensor = new onnxruntime.Tensor("float32", inputData, [
          1,
          inputData.length,
        ]);

        // Run inference
        const outputMap = await session.run([inputTensor]);
        const output = outputMap.values().next().value;

        // Get the prediction result
        const predictedYield = output.data[0];
        document.getElementById("result").innerText =
          "Predicted Yield: " + predictedYield.toFixed(4);
      }

      // Encode area (one-hot encoding)
      function encodeArea(area) {
        const areas = ["Albania", "India", "USA", "Brazil"]; // Update to your specific regions
        return areas.map((a) => (a === area ? 1 : 0));
      }

      // Encode crop type (one-hot encoding)
      function encodeItem(item) {
        const items = ["Maize", "Wheat", "Rice", "Barley"]; // Update to your specific crops
        return items.map((i) => (i === item ? 1 : 0));
      }
}
reg()