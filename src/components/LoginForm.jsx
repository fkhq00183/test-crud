export default function LoginForm({ login, setLogin, onSubmit, error, isSubmitting }) {
  const updateField = (field, value) => {
    setLogin({ ...login, [field]: value })
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="eyebrow">LAVALUST / REACT CLIENT</p>
        <h1>Welcome back.</h1>
        <p className="muted">Sign in to manage the product catalog.</p>
        {error && <p className="alert">{error}</p>}
        <form onSubmit={onSubmit}>
          <label>
            Username
            <input
              required
              value={login.username}
              onChange={(event) => updateField('username', event.target.value)}
            />
          </label>
          <label>
            Password
            <input
              required
              type="password"
              value={login.password}
              onChange={(event) => updateField('password', event.target.value)}
            />
          </label>
          <button className="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </section>
    </main>
  )
}