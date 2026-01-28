import { useState } from "react";

const PRIMARY = "#068bbf";

export default function DeleteAccount() {
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checked) return;

    setLoading(true);

    // TODO: remplacer par l'appel API réel
    setTimeout(() => {
      setLoading(false);
      alert("Compte supprimé");
      // Optionnel : redirection après suppression
      // window.location.href = "/";
    }, 2000);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <img
            src="/logo-techservices.png"
            alt="TechServices"
            style={styles.logo}
          />

          <h1 style={styles.title}>Supprimer votre compte</h1>
          <p style={styles.subtitle}>
            Cette action est définitive. Veuillez lire attentivement avant de continuer.
          </p>
        </div>

        {/* Avertissement */}
        <div style={styles.warning}>
          <ul style={styles.list}>
            <li>Votre compte TechServices sera supprimé définitivement</li>
            <li>Toutes vos données personnelles seront effacées</li>
            <li>Historique, demandes et échanges supprimés</li>
            <li>Aucune récupération ne sera possible</li>
          </ul>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <label style={styles.checkbox}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span>
              Je confirme vouloir supprimer définitivement mon compte
            </span>
          </label>

          <div style={styles.actions}>
            <button type="button" style={styles.cancel}>
              Annuler
            </button>

            <button
              type="submit"
              disabled={!checked || loading}
              style={{
                ...styles.delete,
                opacity: !checked || loading ? 0.6 : 1,
                cursor: !checked || loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? (
                <span style={styles.loaderContainer}>
                  <span style={styles.loader} />
                  Suppression...
                </span>
              ) : (
                "Supprimer le compte"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f8fbfd, #ffffff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 16px",
  },
  card: {
    width: "100%",
    maxWidth: 480,
    background: "#ffffff",
    borderRadius: 16,
    padding: "28px 22px",
    boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
  },
  header: {
    textAlign: "center",
    marginBottom: 24,
  },
  logo: {
    height: 48,
    marginBottom: 12,
    objectFit: "contain",
  },
  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: "#111827",
  },
  subtitle: {
    marginTop: 8,
    color: "#6b7280",
    fontSize: 14,
    lineHeight: 1.5,
  },
  warning: {
    background: "#f0f9ff",
    border: `1px solid ${PRIMARY}33`,
    borderRadius: 12,
    padding: 16,
    marginBottom: 22,
  },
  list: {
    margin: 0,
    paddingLeft: 18,
    fontSize: 14,
    color: "#374151",
    lineHeight: 1.6,
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 6,
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    marginBottom: 16,
    outline: "none",
    fontSize: 14,
  },
  checkbox: {
    display: "flex",
    gap: 10,
    fontSize: 14,
    marginBottom: 22,
    alignItems: "flex-start",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  cancel: {
    background: "#f3f4f6",
    border: "none",
    borderRadius: 10,
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: 14,
  },
  delete: {
    background: PRIMARY,
    color: "#ffffff",
    border: "none",
    borderRadius: 10,
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
  },
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  loader: {
    width: 16,
    height: 16,
    border: "3px solid rgba(255,255,255,0.3)",
    borderTopColor: "#ffffff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};