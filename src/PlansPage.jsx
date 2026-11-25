import React, { useState } from 'react';

// =============================================================================
// PLANS DATA DEFINITION
// =============================================================================
export const availablePlans = [
  {
    id: 'free',
    name: 'Free',
    tierName: 'Free',
    monthlyPrice: 0,
    badge: 'Starter',
    badgeColor: 'neutral',
    tagline: 'Essential acoustic experience for casual music lovers.',
    icon: 'fa-music',
    accentColor: '#9ca3af',
    features: [
      { text: 'Standard 128 kbps audio streaming', included: true },
      { text: 'Full access to curated Hindi, English & Regional tracks', included: true },
      { text: 'Standard search & artist profiles', included: true },
      { text: 'Basic lyrics preview', included: true },
      { text: 'Zero advertisements', included: false },
      { text: '320 kbps Ultra HD & Spatial audio', included: false },
      { text: 'Offline downloads & background play', included: false },
      { text: 'Lossless 24-bit FLAC streaming', included: false }
    ]
  },
  {
    id: 'plus',
    name: 'Plus',
    tierName: 'Plus',
    monthlyPrice: 59,
    badge: 'Budget Friendly',
    badgeColor: 'secondary',
    tagline: 'Ad-free listening with improved acoustics for students and solo fans.',
    icon: 'fa-bolt',
    accentColor: '#7c8ba1',
    features: [
      { text: 'High Quality 256 kbps audio streaming', included: true },
      { text: '100% ad-free music playback', included: true },
      { text: 'Unlimited song skips and replays', included: true },
      { text: 'Full synchronized lyrics display', included: true },
      { text: 'Download up to 50 tracks for offline listening', included: true },
      { text: 'Web and mobile responsive player', included: true },
      { text: 'Lossless 24-bit FLAC streaming', included: false },
      { text: 'Multi-device simultaneous playback', included: false }
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    tierName: 'Pro',
    monthlyPrice: 119,
    badge: 'Most Popular',
    badgeColor: 'amber',
    tagline: 'High-Fidelity 320 kbps spatial audio for true music aficionados.',
    icon: 'fa-crown',
    accentColor: '#d4a373',
    isPopular: true,
    features: [
      { text: 'Ultra High-Res 320 kbps Spatial Audio', included: true },
      { text: 'Completely uninterrupted, zero ads', included: true },
      { text: 'Unlimited song skips & custom playlist creation', included: true },
      { text: 'Unlimited offline song downloads', included: true },
      { text: 'Real-time interactive lyrics & vinyl visualizer', included: true },
      { text: 'Acoustic equalizer & bass boost presets', included: true },
      { text: 'Early access to newly dropped curated albums', included: true },
      { text: 'Studio master 24-bit/192kHz Lossless', included: false }
    ]
  },
  {
    id: 'studio',
    name: 'Studio Hi-Fi',
    tierName: 'Studio Hi-Fi',
    monthlyPrice: 199,
    badge: 'Audiophile Grade',
    badgeColor: 'gold',
    tagline: 'Uncompressed 24-bit FLAC master audio for headphones & studio monitors.',
    icon: 'fa-gem',
    accentColor: '#e2b385',
    features: [
      { text: '24-bit / 192kHz Master Quality Lossless FLAC', included: true },
      { text: 'Dolby Atmos & 3D Binaural Spatial Audio', included: true },
      { text: 'Everything in Pro with unlimited downloads', included: true },
      { text: 'Multi-device streaming on up to 5 devices', included: true },
      { text: 'Collaborative group listening & party sessions', included: true },
      { text: 'Exclusive artist commentary & acoustic stems', included: true },
      { text: 'Audiophile bit-perfect DAC pass-through support', included: true },
      { text: 'VIP acoustic badge & priority 24/7 support', included: true }
    ]
  }
];

function PlansPage({ currentPlan, onSelectPlan }) {
  const [notification, setNotification] = useState(null);

  const handlePlanSelect = (plan) => {
    if (plan.name.toLowerCase() === currentPlan.toLowerCase()) {
      return;
    }

    onSelectPlan(plan.name);
    setNotification({
      type: 'success',
      message: `🎉 Successfully updated to the ${plan.name} Plan! Enjoy your upgraded listening experience.`
    });

    // Auto-dismiss notification after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <section className="view-section active plans-page">
      <div className="plans-container">
        
        {/* Notification Toast */}
        {notification && (
          <div className="plans-toast-alert" role="alert">
            <i className="fa-solid fa-circle-check"></i>
            <span>{notification.message}</span>
            <button
              className="toast-close-btn"
              onClick={() => setNotification(null)}
              aria-label="Close notification"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}

        {/* Hero Header */}
        <div className="plans-hero-header">
          <div className="plans-hero-badge">
            <i className="fa-solid fa-crown"></i>
            <span>MEMBERSHIP TIERS</span>
          </div>
          <h1 className="plans-hero-title">Experience Sound Without Limits</h1>
          <p className="plans-hero-subtitle">
            Choose the perfect plan tailored for your acoustic journey. Switch or cancel anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="plans-cards-grid">
          {availablePlans.map((plan) => {
            const isCurrent =
              plan.name.toLowerCase() === currentPlan.toLowerCase() ||
              plan.tierName.toLowerCase() === currentPlan.toLowerCase();

            return (
              <div
                key={plan.id}
                className={`plan-card ${plan.isPopular ? 'popular-card' : ''} ${isCurrent ? 'active-plan-card' : ''}`}
              >
                {/* Popular or Current Badge */}
                {isCurrent && (
                  <div className="plan-floating-badge active-badge">
                    <i className="fa-solid fa-check"></i> YOUR CURRENT PLAN
                  </div>
                )}
                {!isCurrent && plan.isPopular && (
                  <div className="plan-floating-badge popular-badge">
                    <i className="fa-solid fa-fire"></i> RECOMMENDED
                  </div>
                )}

                <div className="plan-card-header">
                  <div className="plan-card-icon-title">
                    <div className="plan-icon-bubble" style={{ color: plan.accentColor }}>
                      <i className={`fa-solid ${plan.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="plan-name">{plan.name}</h3>
                      <span className="plan-category-badge">{plan.badge}</span>
                    </div>
                  </div>

                  <p className="plan-description">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="plan-price-row">
                  {plan.monthlyPrice === 0 ? (
                    <div className="price-stack">
                      <span className="price-amount">Free</span>
                      <span className="price-period">Forever</span>
                    </div>
                  ) : (
                    <div className="price-stack">
                      <span className="price-currency">₹</span>
                      <span className="price-amount">{plan.monthlyPrice}</span>
                      <span className="price-period">/ month</span>
                    </div>
                  )}
                </div>

                {/* Action CTA Button */}
                <button
                  type="button"
                  className={`plan-action-btn ${isCurrent ? 'btn-current-plan' : plan.isPopular ? 'btn-popular-plan' : 'btn-standard-plan'}`}
                  disabled={isCurrent}
                  onClick={() => handlePlanSelect(plan)}
                >
                  {isCurrent ? (
                    <>
                      <i className="fa-solid fa-circle-check"></i> Current Plan
                    </>
                  ) : (
                    <>
                      {plan.monthlyPrice === 0 ? 'Select Free' : `Choose ${plan.name}`}
                      <i className="fa-solid fa-arrow-right"></i>
                    </>
                  )}
                </button>

                <div className="plan-divider"></div>

                {/* Features List */}
                <div className="plan-features-section">
                  <span className="features-section-title">WHAT'S INCLUDED:</span>
                  <ul className="plan-features-list">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`feature-item ${feature.included ? 'included' : 'not-included'}`}
                      >
                        <i
                          className={`fa-solid ${feature.included ? 'fa-check feature-check' : 'fa-xmark feature-cross'}`}
                        ></i>
                        <span className="feature-text">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="comparison-section">
          <div className="comparison-header">
            <h2 className="comparison-title">Detailed Feature Comparison</h2>
            <p className="comparison-subtitle">
              Compare all acoustic options and find what suits your listening habits best.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Free</th>
                  <th>Plus</th>
                  <th className="highlight-col">Pro (Recommended)</th>
                  <th>Studio Hi-Fi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Streaming Bitrate</td>
                  <td>128 kbps</td>
                  <td>256 kbps</td>
                  <td className="highlight-col">320 kbps (Spatial)</td>
                  <td>24-bit / 192kHz FLAC</td>
                </tr>
                <tr>
                  <td>Ad-Free Listening</td>
                  <td><i className="fa-solid fa-xmark text-muted"></i></td>
                  <td><i className="fa-solid fa-check text-success"></i></td>
                  <td className="highlight-col"><i className="fa-solid fa-check text-success"></i></td>
                  <td><i className="fa-solid fa-check text-success"></i></td>
                </tr>
                <tr>
                  <td>Offline Song Downloads</td>
                  <td><i className="fa-solid fa-xmark text-muted"></i></td>
                  <td>50 Tracks</td>
                  <td className="highlight-col">Unlimited</td>
                  <td>Unlimited (5 Devices)</td>
                </tr>
                <tr>
                  <td>Synchronized Lyrics</td>
                  <td>Preview Only</td>
                  <td><i className="fa-solid fa-check text-success"></i> Full</td>
                  <td className="highlight-col"><i className="fa-solid fa-check text-success"></i> Full</td>
                  <td><i className="fa-solid fa-check text-success"></i> Full + Stems</td>
                </tr>
                <tr>
                  <td>Equalizer & Bass Boost</td>
                  <td><i className="fa-solid fa-xmark text-muted"></i></td>
                  <td>Standard</td>
                  <td className="highlight-col"><i className="fa-solid fa-check text-success"></i> Advanced</td>
                  <td>Audiophile Studio Presets</td>
                </tr>
                <tr>
                  <td>Spatial & Dolby Atmos</td>
                  <td><i className="fa-solid fa-xmark text-muted"></i></td>
                  <td><i className="fa-solid fa-xmark text-muted"></i></td>
                  <td className="highlight-col"><i className="fa-solid fa-check text-success"></i></td>
                  <td><i className="fa-solid fa-check text-success"></i> Binaural 3D</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="plans-faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h4><i className="fa-solid fa-question-circle"></i> Can I change or downgrade my plan anytime?</h4>
              <p>Yes, absolutely! You can switch between Free, Plus, Pro, and Studio Hi-Fi whenever you wish. Your changes reflect immediately in Wavify.</p>
            </div>
            <div className="faq-card">
              <h4><i className="fa-solid fa-bolt"></i> What is 320kbps Spatial Audio?</h4>
              <p>320kbps offers rich, uncompressed MP3 acoustic fidelity with widened soundstage separation, highlighting delicate vocals, acoustic guitars, and punchy bass.</p>
            </div>
            <div className="faq-card">
              <h4><i className="fa-solid fa-download"></i> How does offline listening work?</h4>
              <p>On Plus, Pro, and Studio tiers, songs can be cached locally so you can continue listening seamlessly even when your connection drops.</p>
            </div>
            <div className="faq-card">
              <h4><i className="fa-solid fa-shield-halved"></i> Is there a commitment or cancellation fee?</h4>
              <p>No commitments at all. You can stay on the Free tier forever or test out Pro and cancel anytime without penalties.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PlansPage;

