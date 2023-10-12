import * as onnx from 'onnxjs';
import { Tensor } from 'onnxjs';

// Load the ONNX model
const session = new onnx.InferenceSession();
await session.loadModel('bit.onnx');

// Prepare input data
const input = new Tensor(new Float32Array([1, 2, 3, 4]), 'float32', [1, 4]);

// Run inference
const outputMap = await session.run([input]);
const outputTensor = outputMap.values().next().value;

// Get output data
const outputData = outputTensor.data;