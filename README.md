# React setInterval Memory Leak

This example demonstrates a common error when using `setInterval` within a React component: failing to properly clean up the interval when the component unmounts. This leads to a memory leak, as the interval continues to run even after the component is no longer needed.

The solution demonstrates how to use the cleanup function provided by `useEffect` to stop the interval when the component unmounts.