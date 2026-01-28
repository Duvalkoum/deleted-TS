import { useState } from "react";

const PRIMARY = "#068bbf";

export default function DeleteAccountRequest() {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(
      "Je souhaite supprimer définitivement mon compte TechServices ainsi que toutes les données personnelles associées."
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <h1 style={styles.title}>Demander la suppression de votre compte</h1>
          <p style={styles.subtitle}>
            Pour des raisons de sécurité, la suppression doit être traitée par notre équipe support.
          </p>
        </div>

        {/* Étape 1 : Être connecté – PAS DE SCREEN */}
        <div style={styles.stepSection}>
          <h2 style={styles.stepTitle}>1. Être connecté</h2>
          <p style={styles.stepText}>
            Ouvrez l'application ou le site et connectez-vous avec vos identifiants habituels. Si vous avez oublié votre mot de passe, utilisez la fonction de récupération.
          </p>
        </div>

        {/* Étape 2 : Espace profil */}
        <div style={styles.stepSection}>
          <h2 style={styles.stepTitle}>2. Aller sur l'espace profil</h2>
          <p style={styles.stepText}>
            Une fois connecté, cliquez sur votre avatar ou l'icône profil (généralement en haut à droite) pour accéder à vos paramètres personnels.
          </p>
          <div style={styles.screenContainer}>
            <img
              src="/screen-profil.png"
              alt="Écran profil utilisateur"
              style={styles.screenMockup}
            />
          </div>
        </div>

        {/* Étape 3 : Support client */}
        <div style={styles.stepSection}>
          <h2 style={styles.stepTitle}>3. Cliquer sur support client</h2>
          <p style={styles.stepText}>
            Dans le menu profil, sélectionnez "Support client" ou "Aide".
          </p>
          <div style={styles.screenContainer}>
            <img
              src="/screen-support.png"
              alt="Écran de support client"
              style={styles.screenMockup}
            />
          </div>
        </div>

        {/* Étape 4 : Créer un ticket – AVEC SCREEN */}
        <div style={styles.stepSection}>
          <h2 style={styles.stepTitle}>4. Créer un ticket</h2>
          <p style={styles.stepText}>
            Cliquez sur "Nouveau ticket" ou "Contacter le support", puis copiez-collez ce message :
          </p>
          <div style={styles.copyBox}>
            <p style={styles.copyText}>
              Je souhaite supprimer définitivement mon compte TechServices ainsi que toutes les données personnelles associées.
            </p>
            <button
              type="button"
              style={styles.copyButton}
              onClick={handleCopyText}
            >
              {copied ? "Copié !" : "Copier le message"}
            </button>
          </div>
          <p style={styles.tip}>
            💡 Fournissez le maximum de détails (email, numéro de compte, raison) pour accélérer le traitement.
          </p>
          {/* Screen réduit ici */}
          <div style={styles.screenContainer}>
            <img
              src="/screen-ticket.png"
              alt="Écran de création de ticket support"
              style={styles.screenMockup}
            />
          </div>
        </div>

        {/* Bouton final */}
        <div style={styles.finalCTA}>
          <button
            type="button"
            style={styles.next}
            onClick={() => window.open("https://techservices.com/support", "_blank")}
          >
            Aller au support client
          </button>
        </div>
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
    alignItems: "flex-start",
    padding: "24px 16px",
    overflowY: "auto",
  },
  card: {
    width: "100%",
    maxWidth: 520,
    background: "#ffffff",
    borderRadius: 16,
    padding: "28px 22px",
    boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
    marginTop: 20,
  },
  header: {
    textAlign: "center",
    marginBottom: 28,
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
  stepSection: {
    marginBottom: 32,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: PRIMARY,
    marginBottom: 8,
  },
  stepText: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 1.6,
    marginBottom: 16,
  },
  screenContainer: {
    textAlign: "center",
    margin: "20px 0 12px 0",
  },
  screenMockup: {
    maxWidth: 280,
    width: "100%",
    height: "auto",
    borderRadius: 24,
    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
    border: "8px solid #000",
    borderTopWidth: "24px",
    borderBottomWidth: "24px",
    background: "#000",
  },
  copyBox: {
    background: "#f3f4f6",
    borderRadius: 12,
    padding: 16,
    margin: 12,
    borderLeft: `4px solid ${PRIMARY}`,
  },
  copyText: {
    margin: 0,
    color: "#111827",
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 10,
  },
  copyButton: {
    background: PRIMARY,
    color: "#ffffff",
    border: "none",
    borderRadius: 8,
    padding: "8px 14px",
    fontSize: 13,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  tip: {
    fontSize: 13,
    color: "#6b7280",
    background: "#f9fafb",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    textAlign: "center",
  },
  finalCTA: {
    textAlign: "center",
    marginTop: 32,
  },
  next: {
    background: PRIMARY,
    color: "#ffffff",
    border: "none",
    borderRadius: 10,
    padding: "14px 24px",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(6, 139, 191, 0.3)",
    transition: "all 0.2s ease",
  },
};