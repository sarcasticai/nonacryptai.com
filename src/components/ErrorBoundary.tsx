import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCw, Home, ClipboardList, ShieldAlert, Cpu } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  copied: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    copied: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null, copied: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    console.error("[NonaCrypt-Shield] Caught React runtime crash:", error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('nonacrypt-selected-region');
    } catch (e) {}
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleCopyLogs = () => {
    if (this.state.error) {
      const logs = `Error: ${this.state.error.message}\n\nStack:\n${this.state.error.stack || ''}\n\nComponent Stack:\n${this.state.errorInfo?.componentStack || ''}`;
      navigator.clipboard.writeText(logs);
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2500);
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-[#0A0A0A] w-full min-h-screen flex flex-col items-center justify-center text-slate-300 relative overflow-hidden px-4 md:px-8 py-24 select-text">
          {/* Diagnostic grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>
          
          <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
            {/* Warning visual node */}
            <div className="mx-auto h-20 w-20 rounded-2xl bg-rose-500/5 border border-rose-500/20 flex items-center justify-center shadow-2xl shadow-rose-500/5">
              <ShieldAlert className="h-10 w-10 text-rose-400" />
            </div>

            {/* Error titles description */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-black text-rose-400 bg-rose-500/10 px-3 py-1 rounded border border-rose-500/20 tracking-widest uppercase inline-block">
                ERR_SYSTEM_SUSPENDED — COMPILE_STRLOCK
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
                Technical Error Occurred
              </h1>
              <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                An exceptional system state has interrupted the cognitive layout. The current view has been isolated to prevent cascade failures.
              </p>
            </div>

            {/* Collapsible/Direct Error Logs Block */}
            <div className="text-left bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden p-6 font-mono text-xs shadow-inner max-w-full">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-rose-400">
                  <Cpu className="h-3.5 w-3.5" /> Stack Telemetry Logs
                </span>
                <button
                  onClick={this.handleCopyLogs}
                  className="px-2.5 py-1 rounded bg-[#0A0A0B] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
                >
                  {this.state.copied ? 'Copied Stack!' : 'Copy Telemetry'}
                </button>
              </div>

              <div className="space-y-3 overflow-x-auto select-all max-h-48 custom-scrollbar">
                <p className="text-rose-400 font-bold bg-rose-500/5 p-2 rounded border border-rose-500/10">
                  {this.state.error && this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-[10px] text-slate-500 leading-normal font-mono select-all">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            </div>

            {/* Safety recovery controls */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
              <button
                onClick={this.handleReload}
                className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-xl bg-white text-[#0A0A0A] font-bold text-sm px-6 hover:bg-slate-200 active:scale-[0.99] transition-all cursor-pointer shadow-lg"
              >
                <RotateCw className="mr-2 h-4 w-4 text-[#0A0A0A]" />
                Reload Web Host
              </button>
              <button
                onClick={this.handleReset}
                className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-sm px-6 hover:border-slate-600 active:scale-[0.99] transition-all cursor-pointer"
              >
                <Home className="mr-2 h-4 w-4 text-blue-400" />
                Reset & Return Home
              </button>
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-slate-400 hover:text-white font-bold text-sm px-6 transition-colors"
              >
                <ClipboardList className="mr-2 h-4 w-4 text-indigo-400" />
                Report Outage
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
