"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Shield, User, Mail, Lock, Eye, EyeOff, Building2 } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const pathname = usePathname()

  const [activeRole, setActiveRole] = useState<"admin" | "member">("admin")
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    organization: "",
  })

  /* 🔄 Sync role with route */
  useEffect(() => {
    if (pathname.includes("/member-portal")) {
      setActiveRole("member")
    } else {
      setActiveRole("admin")
    }
  }, [pathname])

  const handleRoleSwitch = (role: "admin" | "member") => {
    setActiveRole(role)
    router.push(role === "admin" ? "/login" : "/member-portal")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (activeRole === "admin") {
      router.push("/admin/dashboard")
    } else {
      router.push("/member/dashboard")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-2xl">

            {/* 🔀 Role Switch Tabs */}
            <div className="flex mb-8 bg-muted rounded-xl p-1">
              <button
                onClick={() => handleRoleSwitch("admin")}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeRole === "admin"
                    ? "bg-background shadow text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Admin
              </button>

              <button
                onClick={() => handleRoleSwitch("member")}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeRole === "member"
                    ? "bg-background shadow text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Member
              </button>
            </div>

            {/* 🧾 Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                {activeRole === "admin" ? (
                  <Shield className="w-8 h-8 text-white" />
                ) : (
                  <User className="w-8 h-8 text-white" />
                )}
              </div>

              <h1 className="text-3xl font-bold mb-2">
                {activeRole === "admin" ? "Admin Login" : "Member Login"}
              </h1>

              <p className="text-muted-foreground">
                {activeRole === "admin"
                  ? "Sign in to access the admin dashboard"
                  : "Sign in to access the member portal"}
              </p>
            </div>

            {/* 📝 Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hotel - Only for Member */}
              {activeRole === "member" && (
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Hotel
                  </label>
                  <div className="relative">
                    <Building2
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      size={18}
                    />
                    <select
                      required
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select your hotel</option>
                      <option value="kalanki">Kalanki Hotel Business Association</option>
                      <option value="sundhara">Sundhara Hotel Business Association</option>
                      <option value="bagbazar">Bagbazar Hotel Business Association</option>
                      <option value="koteshwor">Koteshwor Hotel Business Association</option>
                      <option value="airport">Airport Hotel Business Association</option>
                      <option value="chabahil">Chabahil Hotel Business Association</option>
                      <option value="balaju">Balaju Hotel Business Association</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none"
                    placeholder={
                      activeRole === "admin"
                        ? "admin@dhba.com"
                        : "member@dhba.com"
                    }
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full pl-11 pr-12 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-sm text-muted-foreground">
                    Remember me
                  </span>
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm text-primary font-semibold hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Sign In
              </button>
            </form>

            {/* 🔐 Demo Credentials */}
            <div className="mt-6 p-4 bg-muted/50 rounded-xl text-center">
              <p className="text-xs text-muted-foreground mb-2">
                Demo Credentials
              </p>
              <p className="text-xs font-mono">
                <strong>Email:</strong>{" "}
                {activeRole === "admin"
                  ? "admin@dhba.com"
                  : "member@dhba.com"}
                <br />
                <strong>Password:</strong>{" "}
                {activeRole === "admin" ? "admin123" : "member123"}
              </p>
            </div>

            {/* Registration Link - Only for Member */}
            {activeRole === "member" && (
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Not a member yet?{" "}
                  <Link href="/membership" className="text-primary hover:underline font-semibold">
                    Apply for Membership →
                  </Link>
                </p>
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
