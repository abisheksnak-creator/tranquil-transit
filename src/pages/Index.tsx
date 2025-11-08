import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Welcome to Your
            <span className="text-primary block mt-2">Modern Auth App</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience seamless authentication with a beautiful, modern interface.
            Sign in to access your personalized dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="transition-all hover:scale-105 active:scale-95"
            >
              Sign In
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/register")}
              className="transition-all hover:scale-105 active:scale-95"
            >
              Create Account
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in">
            <div className="w-14 h-14 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-muted-foreground">
              Your data is protected with industry-standard security practices
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-14 h-14 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-muted-foreground">
              Lightning-fast performance with smooth animations
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern</h3>
            <p className="text-muted-foreground">
              Clean, minimal design that works beautifully on all devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
