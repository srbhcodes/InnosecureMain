import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { insights } from '../../data/insightsData';
import '../../styles/pages/insight-detail.css';

const InsightDetail = () => {
  const { id } = useParams();
  const insight = insights.find(insight => insight.id === id);

  if (!insight) {
    return (
      <div className="insight-detail">
        <div className="container">
          <h1>Insight Not Found</h1>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="insight-detail">
      <div className="insight-banner">
        <img src={insight.image} alt={insight.title} />
      </div>

      <div className="insight-content">
        <div className="container">
          <div className="insight-header">
            <div className="insight-icon">{insight.icon}</div>
            <h1 className="insight-title">{insight.title}</h1>
          </div>

          <div className="insight-body">
            <p className="insight-text">{insight.content}</p>
          </div>

          <div className="insight-footer">
            <Link to="/" className="btn btn-primary">
              Back to Insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetail;

