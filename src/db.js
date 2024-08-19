import Dexie from "dexie";

const db = new Dexie("low-code-db");

db.version(1).stores({
  pages: "++id, pageId, step, components",
});

let currentStep = null;

export async function findLatest(pageId) {
  return await db.pages.where({ pageId }).last();
}

export async function initCurrentStep(pageId) {
  if (currentStep === null) {
    const { id } = (await findLatest(pageId)) || { id: 0 };
    currentStep = id;
  }
}

export async function findPrev(pageId) {
  await initCurrentStep(pageId);
  currentStep--;
  return await db.pages.where({ pageId, id: currentStep }).last();
}

export async function findNext(pageId) {
  await initCurrentStep(pageId);
  currentStep++;
  return await db.pages.where({ pageId, id: currentStep }).last();
}

export async function addPage(
  pageId,
  { components, currentComponentId, counter }
) {
  currentStep = await db.pages.add({
    pageId,
    components,
    currentComponentId,
    counter,
  });
}

export async function deletePage(pageId) {
  await db.pages.where({ pageId }).delete();
}
