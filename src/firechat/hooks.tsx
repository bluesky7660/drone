import { useEffect, useState, useRef } from 'react';
import { Query, DocumentData, onSnapshot } from 'firebase/firestore';

// 쿼리 조건을 추적하는 Custom Hook
export function useFirestoreQuery(query: Query<DocumentData>) {
  const [docs, setDocs] = useState<DocumentData[]>([]);
  const lastQueryRef = useRef<Query<DocumentData> | null>(null);

  // 쿼리 조건을 비교하는 함수
  const areQueriesEqual = (query1: Query<DocumentData>, query2: Query<DocumentData>) => {
    // Firestore 쿼리 객체는 `isEqual` 메서드를 제공합니다.
    return query1.isEqual(query2);
  };

  useEffect(() => {
    if (!lastQueryRef.current || !areQueriesEqual(lastQueryRef.current, query)) {
      lastQueryRef.current = query;
    }
  }, [query]);

  useEffect(() => {
    if (!lastQueryRef.current) return;

    // Firestore의 onSnapshot을 사용하여 실시간 업데이트
    const unsubscribe = onSnapshot(lastQueryRef.current, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocs(data);
    });

    // 구독 해제
    return () => unsubscribe();
  }, [query]);

  return docs;
}
