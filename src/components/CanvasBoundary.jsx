import { Component } from "react";

/**
 * Prevents a WebGL/Three.js failure from taking down the whole page.
 * Falls back to `fallback` (or nothing) if the 3D scene throws.
 */
export default class CanvasBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.warn("3D hero scene failed to render, falling back.", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
